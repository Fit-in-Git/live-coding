import express from "express";
import membersRouter from "./routes/members.js";
import booksRouter from "./routes/books.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/members", membersRouter);
app.use("/books", booksRouter);

/*
404 Route fängt Abfragen für nicht existierende Endpunkte ab. Muss unter den Routen stehen.
*/
app.use((req, res)=>{
    res.status(404).json({msg:"Die Seite existiert nicht!"})
})

/*
Allgemeiner Error-Handler, Fehler die mit next() in unseren Routen übergeben werden, werden hier abgefangen
*/

app.use((err, req, res, next)=>{
    console.log("Ein Fehler ist aufgetreten", err);
    res.status(500).json({msg:"Serverfehler"})
})

app.listen(PORT, ()=>{
    console.log(`Der Server hört auf port: ${PORT}`);
});