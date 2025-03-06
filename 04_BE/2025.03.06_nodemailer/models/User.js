import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    /*
    Den validationToken nutzen wir, um den User über E-Mail zu verifizieren.
    Wir speichern ihn direkt bei der Registrierung ab.
    */
    validationToken: String,
    /*
    Das Feld emailValidated setzen wird standardmäßig auf false. Wenn wir die Token
    verglichen haben und diese übereinstimmen, setzen wir es auf true
    */
    emailValidated: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function(next){
    try {
        if (this.isModified("password")){
            const hash = await bcrypt.hash(this.password, 12);
            this.password = hash;
        }
        next();
    } catch (error) {
        next(error)
    }
});

export const User = model("User", userSchema);