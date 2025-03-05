import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

/*
Die Methode schema.pre("save") wird unmittelbar vor dem Speichern des Dokuments aufgerufen. Wir benutzen das Paket bcrypt, das wir vorher installiert haben. 
Die Anzahl der Salt-Runden ist immer ein Kompromiss aus Zeit und Sicherheit. Erhöhen wir
den Wert für das Salten um 1 verdoppelt sich die Zeit, die zum Hashen benötigt wird.
Vertretbare Werte liegen im Bereich zwischen 10-15

Der Funktion bcrypt.hash() übergeben wir mit this.password das Passwort, welches über
den body mitgeschickt wurde und in der Datenbank gespeichert werden soll.
Zweiter Paramter sind die Salt-Runden. Als Ergebnis bekommen wir einen hash, der auch
das salt beinhaltet.
Mit "this.password=hash" überschreiben wir das Klartext-Passwort, das der User
mitgeschickt hat und ersetzen es durch den hash. Dieser wird jetzt in der Datenbank
gespeichert.
Abschließend übergeben wir mit next() an die nächste Funktion.
*/

userSchema.pre("save", async function(next){
    try {
        const saltRounds = 12;
        const hash = await bcrypt.hash(this.password, saltRounds);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

/*
Die schema.method Funktion wird auf eine Instanz eines Dokumentes angewendet. Sie hat Zugriff auf alle Felder innerhalb eines spezifischen Dokuments. Der Name ist frei 
wählbar, hier haben wir sie "authenticate" genannt. Über diesen Namen rufen wir sie später aus dem Controller heraus auf.
In der Funktion benutzen wir bcrypt.compare() um das zu überprüfende Klartext-Passwort mit dem in der Datenbank gehasht gespeicherten Passwort zu vergleichen.
Wir returnen das Ganze, das Ergebnis von compare() kann nur true oder false sein.

Die Funktion nimmt ein Argument entgegen (password), das übergeben wir im Controller und es enthält unser Klartext-Passwort.
*/

userSchema.methods.authenticate = async function(password){
    return await bcrypt.compare(password, this.password);
}

export const User = model("User", userSchema);