import { Router } from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

const userRouter = Router();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL, // Eure Google Mail Adresse
        pass: process.env.PASSWORD // Euer Google App-Passwort
    }
});

userRouter
    .post("/register", async(req, res)=>{
        try {
            /*
            Wir erstellen uns eine Post-Route zum Registrieren von Usern. Beim Speichern des Users soll ein Token generiert werden und zusammen mit dem User in der 
            Datenbank gespeichert werden.
            Anschließend schicken wir mit nodemailer eine Mail an den Benutzer, diese
            enthält eine URL zu einer Webseite. An diese URL hängen wir unseren Token an.
            Der Link sieht dann z.B. so aus: "http://127.0.0.1:5500/index.html?token=13232ac938g8172fd232398b8c90".
            Beim Anklicken des Links wird die Webseite aufgerufen. Diese wiederum extrahiert den Token aus der URL und macht einen Fetch-Request an die Route:
            "/verify/:token"
            Dann vergleichen wir den mitgeschickten Token mit dem in der Datenbank
            gespeicherten. Sind beide identisch, setzen wir das Feld emailValidated auf true
            */
           const token = crypto.randomBytes(32).toString("hex");
           const newUser = new User(req.body);
           newUser.validationToken = token;
           await newUser.save();

           const mailOptions = {
            from: "E-Mail-Verifizierung",
            to: "ziel-email@gmail.com",
            subject: "Bestätigen Sie ihre E-Mail-Adresse",
            text: `Rufen Sie diesen Link auf, um ihre E-Mail-Adresse zu bestätigen: http://127.0.0.1:5500/04_BE/2025.03.06_nodemailer/index.html?token=${token}`
           }

            /*
            Das eigentliche Verschicken der Mail findet hier statt. Wir übergeben zwei Argumente an sendMail, die Optionen und eine Callback. 
            Die Callback verwaltet den erfolgreichen oder fehlgeschlagenen Versuch, die
            Mail zu verschicken.
            */
           transporter.sendMail(mailOptions, (error, info)=>{
            if (error){
                console.log(error);
                res.status(500).send("Fehler beim Verschicken der E-Mail-Verifizierung!")
            } else {
                console.log("E-Mail verschickt:", info.response);
                res.status(201).json({msg: "Benutzer erstellt. Eine Verifizierungs-E-Mail wurde verschickt!", newUser});  
            }
           })
        } catch (error) {
            console.log(error);
            res.status(500).json({msg:"Serverfehler!"});
        }
    })
    /*
    Die folgende Route wird beim Aufrufen der index.html angefragt. Sie dient dazu,
    den User abschließend zu validieren. Wir vergleichen hier die beiden Token:
    den aus der URL und den in der Datenbank gespeicherten.
    */
    .get("/verify/:token", async(req, res)=>{
        try {
            const token = req.params.token;
            console.log({token});
            // Anhand des Tokens finden wir einen User in der Datenbank
            const user = await User.findOne({validationToken:token});

            if (user){
                user.emailValidated = true;
                // Den Token wieder entfernen
                user.validationToken = undefined;

                await user.save();
                return res.status(200).json({msg: "Die E-Mail wurde erfolgreich verifiziert!", emailValidated: user.emailValidated})
            } else {
                return res.status(401).json({msg: "Verifizierungsfehler!"});
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Serverfehler"})
        }
    })

export default userRouter;