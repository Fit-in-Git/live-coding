import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res)=>{
    console.log({headers: req.headers, cookies:req.cookies});
    res.send("Hello World");
});

app.get("/cookie", (req, res)=>{
    res.header("Set-Cookie", "sessionId=abc123; Expires=Wed, 31 Oct 2025 13:37:00 GMT; Secure; HttpOnly");
    res.send("Cookie wurde gesetzt!")
});

app.get("/easycookie", (req, res)=>{
    const options = {expires: new Date(Date.now()+ 900_000), secure:true, httpOnly: true};
    res.cookie("nextSessionId", "xyz123", options);
    res.send("Cookie wurde mit einer alternativen Methode gesetzt!");
});

app.get("/lamecookie", (req, res)=>{
    const date = new Date(Date.now()+60000);
    res.cookie("lamecookie", "bad", {expires:date});
    res.send("Lamecookie wurde gesetzt!");
});

app.get("/shortcookie", (req, res)=>{
    res.cookie("shortcookie", "short", {maxAge:10000});
    res.send("Shortcookie wurde gesetzt!");
})

app.listen(PORT, ()=>{
    console.log(`Server hört auf Port: ${PORT}`);
});