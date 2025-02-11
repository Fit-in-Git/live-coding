import express from "express"

const app = express();

app.use((req, res, next)=>{
    console.log("Erste Middelware");
    next();
});

app.use((req, res, next)=>{
    console.log("Zweite Middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("Dritte Middleware");
    next();
});

app.get("/", (req, res)=>{
    res.send("Get route");
})

app.listen(3000, ()=>{
    console.log("Der Server hört auf Port 3000!"); 
});