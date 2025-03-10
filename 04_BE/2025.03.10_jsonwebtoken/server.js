import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";
import jwt from "jsonwebtoken";

// connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

// Secret courtesy by Yousif (https://jwtsecret.com/generate)
const SECRET = process.env.SECRET;

app.get("/reports", authenticateToken, (req, res)=>{
  const reports = [
    {id: 1, title: "Report 1"},
    {id: 2, title: "Report 2"},
    {id: 3, title: "Report 3"}
  ]
  res.status(200).json(reports);
});

app.post("/login", (req, res)=>{
  try {
    const {username, password} = req.body;
    // Überprüfen of name und password korrekt sind
    if (username === "admin" && password === "password"){
      // Einen Token generieren
      const token = jwt.sign({username}, SECRET, {expiresIn: "1h"})
      // Wir schicken den Token als Antwort zurück an das Frontend
      res.status(200).json({token});
    } else {
      // Wir schicken einen Fehler zurück, wenn username und/oder password nicht stimmen
      res.status(401).json({error: "Anmeldedaten fehlerhaft!"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Serverfehler"});
  }
})

// Middleware um den Token zu verifizieren
function authenticateToken(req, res, next){
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader){
      return res.status(400).json({msg: "Kein Token vorhanden!"})
    };

    const token = authHeader.split(" ")[1];
    console.log({authHeader, token});
    
    jwt.verify(token, SECRET, (err, user)=>{
      if (err){
        return res.status(403).json({msg: "Verboten!"})
      }
      req.user = user;
      next();
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
};

app.get("/users", authenticateToken, (req, res)=>{
  res.status(200).json({user: req.user})
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
