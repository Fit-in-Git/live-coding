import express from "express";
import { limiter } from "./middleware/rate-limiter.js";

const app = express();

// Logger Middleware
app.use((req, res, next)=>{
    console.log(`HTTP Methode: ${req.method} URL: ${req.url}`);
    next();
})

/*
Soll die Middleware nur unter bestimmten Pfaden aktiv sein, können wir diese zusätzlich angeben. 
*/

app.use("/comments", (req, res, next)=>{
    console.log("Middleware für /comments");
    next();
})

// Statt use benutzen wir die passende Methode und geben als Pfad "*" an, dadurch wird die Middleware bei jedem Post-Request aufgerufen

app.post("*", (req, res, next)=>{
    console.log("Header checker");
    if (!req.headers.authorization){
        return res.send("Kein Autorisierungsheader!")
    }
    next();
})

app.use(limiter);

app.get("/", (req, res)=>{
    res.send("Get Route")
})

app.get("/comments", (req, res)=>{
    res.send("Comments Route")
})

app.post("/", (req, res) => {
    res.send("Post Route")
})

app.post("/user/login", (req, res) => {
    res.send("Login Route")
})

app.listen(3000, ()=>{
    console.log("Der Server hört auf Port 3000!"); 
});