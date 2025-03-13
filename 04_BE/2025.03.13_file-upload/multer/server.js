import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";
import Photo from "./models/PhotoUser.js";
import multer from "multer";
import crypto from "crypto";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  // Speicherort für die Bilder
  destination: function(req, file, callback){
    callback(null, "./uploads/")
  },
  // Dateiname festlegen
  filename: function(req, file, callback){
    // at(-1) nimmt das letzte Element: https://www.w3schools.com/jsref/jsref_array_at.asp
    const suffix = file.originalname.split(".").at(-1); // jpg
    const filename = crypto.randomUUID(); //36b8f84d-df4e-4d49-b662-bcde71a8764f
    callback(null, filename + "." + suffix)
  }
});

// Multer mit den obigen Konfigurationen initialisieren
const upload = multer({storage});
/*
Die Multer-Middleware upload.single() bezieht sich auf das Formularfeld
mit dem Namen "profilePicture" und sorgt für den Upload.
Multer lädt alles gemäß unserer Konfiguration hoch. Die Datei wird an das
Request-Object angehängt und ist unter "file" verfügbar.
*/
app.post("/register", upload.single("profilePicture"), async(req, res)=>{
  try {
    console.log("file", req.file);
    const photo = new Photo(req.body);
    photo.profilePicture = req.file.filename;
    await photo.save();
    res.status(201).send("Bild gespeichert");
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Serverfehler!")
  }
});

app.get("/users", async(req, res)=>{
  try {
    const users = await Photo.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Serverfehler!")
  }
});

app.get("/users/:username/photo", async(req, res)=>{
  try {
    const {username} = req.params;
    const user = await Photo.findOne({username});
    const path = "uploads/" + user.profilePicture;
    const absolutePath = import.meta.dirname + "/" + path;
    res.sendFile(absolutePath);
  } catch (error) {
    console.log(error);
    res.status(500).send("Serverfehler!")
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
