import express from "express";
import http from "http";
import {Server} from "socket.io";

// Server für http-Anfragen
const app = express();

/*
Instanz von http-Server und den express-Server übergeben
Der http-Server verbindet Express mit socket.io und fungiert
als gemeinsam genutzter Server
*/
const server = http.createServer(app);

/*
Eine Instanz vom socket.io Server erstellen
Wir teilen die Möglichkeiten von websocket mit dem http-Server
*/
const io = new Server(server);

app.use(express.static(import.meta.dirname + "/public")); // Statische Dateien ausliefern

io.on("connection", (socket)=>{
    console.log("Ein Benutzer ist verbunden!");
    // Hört auf das "nachricht senden"-Ereignis vom Client
    socket.on("nachricht senden", (msg)=>{
        io.emit("neue nachricht", msg); // Sofortige Nachricht an alle Clients
    });
});

server.listen(3000, ()=>console.log("Server hört auf Port 3000!"));