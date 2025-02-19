// Wir importieren die benötigten Funktionen aus dem Mongoose-Paket
import { Schema, model } from "mongoose";

/*
Wir definieren ein Schema für einen User in der Datenbank
Ein Schema in Mongoose definiert die Struktur eines Dokuments in 
einer MongoDB-Collection
*/

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    accountNumber: Number,
    description: String,
    isVerified: {
        type: Boolean,
        default: false
    }
});

/*
Wir erstellen Mongoose-Model mit dem Namen "User" basierend auf dem userSchema
Ein Model ist eine höhere Abstraktionsebene über dem Schema
Es respräsentiert eine Collection in der Datenbank und bietet uns eine Schnittstelle
für Datenbankoperationen
Wir binden das Schema an eine bestimmte Collection in der Datenbank
*/

const User = model("User", userSchema);

export default User;