import { Schema, model } from "mongoose";
import mongoose from "mongoose";

function escapeHTML(str){
    return str.replace(/[&<>"']/g, function(char){
        const blackList = {
            '&':'&amp;',
            '<':'&lt;',
            '>':'&gt;',
            '"':'&quot;',
            "'":'&#39;'
        }
        return blackList[char];
    })
}

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Bitte einen Namen eingeben!"],
        set: v => escapeHTML(v),
        trim: true
    },
    email: {
        type: String,
        required: [true, "Bitte eine gültige E-Mail eingeben!"],
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig.test(v)
                // Vereinfachte Form:
                // return v.includes("@") && v.includes(".")
            },
            message: "Bitte eine gültige E-Mail eingeben!"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Das Password hat nicht die erforderliche Länge (8-30 Zeichen)!"],
        maxLength: [30, "Das Password hat nicht die erforderliche Länge (8-30 Zeichen)!"],
        match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, "Das Passwort muss aus Groß- und Kleinbuchstaben bestehen und mindestens eine Zahl enthalten!"]
    },
    website: {
        type: String,
        validate: {
            validator: function(v){
                return v === undefined || v === "" || /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v)
            }
        }
    },
    location: {
        type:String,
        enum: {
            values: ["Deutschland", "Österreich", "Schweiz"],
            message: "Anmeldung nur aus der DACH-Region möglich!"
        }
    },
    blogposts: {
        type:String,
        validate: {
            validator: function(v){
                return mongoose.Types.ObjectId.isValid(v);
            },
            message: "Ungültige ObjectId!"
        }
    }
});

export const User = model("User", userSchema);