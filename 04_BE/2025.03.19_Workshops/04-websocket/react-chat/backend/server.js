import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import User from "./models/User.js";

connectDB();

const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

const onlineUsers = new Map();

io.on("connection", (socket)=>{
  socket.on("register", async (username)=>{
    try {
      // User online setzen oder erstellen falls nicht vorhanden
      const user = await User.findOneAndUpdate(
        {username},
        {online: true},
        {new:true, upsert:true}
      );

      if (user){
        socket.username = username;
        onlineUsers.set(username, {username, online:true}); // User zu Map hinzufügen

        io.emit("user online", {username, online:true}); // Allen sagen wer online ist

        // Nachrichten aus der DB holen (nur messages und username)
        const users = await User.find({}, {messages:1, username:1});

        // Alle Nachrichten sammeln
        const allMessages = [];

        users.forEach((user)=>{
          user.messages.forEach((msg)=>{
            allMessages.push({
              username: user.username,
              content: msg.content,
              timestamp: msg.timestamp
            });
          });
        });

        allMessages.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );

        socket.emit("load messages", allMessages); // Nachrichten verschicken
        socket.emit("current users", Array.from(onlineUsers.values())); // Online User verschicken
        socket.emit("registration success", user); // Erfolgreiche Anmeldung
      } else {
        socket.emit("registration failed", "Benutzername schon vorhanden");
      }
    } catch (error) {
      socket.emit("registration failed", error.message);
    }
  });

  socket.on("chat message", async (msg)=>{
    try {
      const user = await User.findOneAndUpdate(
        {username: socket.username},
        {
          $push: {messages: {content: msg.content, timestamps: new Date()}}
        },
        {new: true}
      );

      if (user){
        // Nachricht weitergeben
        io.emit("chat message", {
          username: socket.username,
          content: msg.content
        })
      }
    } catch (error) {
      console.log("Fehler beim Speichern der Nachrichten", error);
    }
  });

  socket.on("disconnect", async ()=>{
    // User offline setzen
    if (socket.username){
      await User.findOneAndUpdate(
        {username: socket.username},
        {online: false}
      );
      io.emit("user offline", {username: socket.username, online:false}); // Allen mitteilen wer offline ist
    }
  })

});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
