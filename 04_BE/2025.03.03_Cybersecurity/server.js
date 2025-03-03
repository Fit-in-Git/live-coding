import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

const msgs = ["Hello World"]

app.get("/api", (req, res)=>{
    res.json(msgs)
});
/*
Geben wir so etwas ins Input-Feld ein:
"HI <script>alert('XSS')</script>"
kann der Browser es noch "entschärfen", der alert wird nicht angezeigt.
Anders wenn wir das versuchen:
<img src=1 onerror=alert('XSS')>
*/
app.post("/api", (req, res)=>{
    // Was immer das Frontend uns gibt, wir nehmen es so hin
    console.log("body", req.body);
    
    msgs.push(req.body.text);
    res.send("OK")
});

/*
Ein Beispiel für Reflected XSS. Wenn wir folgende Seite aufrufen:
http://localhost:3000/search?q=<script>alert('XSS')</script>
Wird der JavaScript-Code einfach ausgeführt
*/
app.get("/search", (req, res)=>{
    const query = req.query.q; // Unsicher da keine Filterung
    res.send(`<h1>Suchergebnisse für: ${query}</h1>`)
})

app.listen(PORT, ()=>{
    console.log("Server läuft auf Port 3000");
});