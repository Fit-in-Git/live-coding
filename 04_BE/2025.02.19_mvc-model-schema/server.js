import mongoose from "mongoose";
import connectDB from "./libs/mongoDB.js";
import User from "./models/User.js";
import Pet from "./models/Pets.js";

/* Die folgenden 3 Zeilen sind nur zur Demo "quick and dirty". In Zukunft stellen wir
die Datenbankverbindung her wie in der mongoDB.js gezeigt.
*/

// mongoose.connection.on("connected", ()=>console.log("Mit der Datenbank verbunden"));
// mongoose.connection.on("error", (error)=> console.log("Db error!"));
// await mongoose.connect(process.env.MONGO_URL, {dbName:process.env.DATABASE});

connectDB();

/*
Über die create() Methode von Mongoose wird ein neues Dokument in der Datenbank erstellt. 
Sie nimmt ein Objekt entgegen, mit den Daten für den neuen Benutzer
Die übergebenen Daten entsprechen den Feldern, die wir im Schema definiert haben
*/

const newUser = await User.create({
    email: "kiki@example.org",
    password: "qwerty123",
    accountNumber: 230482303902,
    description: "Ein neuer User",
    isVerified: false
})

console.log({newUser});

// Benutzer anzeigen
const users = await User.find()
// console.log({users});

/*
new Pet() erstellt eine Instanz des Pet-Models.
Dies erzeugt ein neues Dokument-Objekt im Arbeitsspeicher, aber noch nicht in der Datenbank
*/

const newPet = new Pet({
    name: "Fluffy",
    species: "Cat",
    breed: "Persian",
    age: 3,
    owner: "John Doe"
});

console.log({newPet});

/*
newPet.save() ist eine Methode, die auf der Instanz aufgerufen wird.
Sie speichert uns das Dokumentenobjekt in der Datenbank
*/

await newPet.save();

/*
Unterschied zur create() Methode:
- new Pet() mit save() ist ein zweistufiger Prozess: 
Erst wird das Objekt erstellt, dann wird gespeichert
- Dies erlaubt Modifikationen am Objekt vor dem Speichern und bietet mehr Kontrolle
über den Prozess
- create() kombiniert die beiden Schritte in einer Operation
*/
