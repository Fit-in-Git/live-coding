import User from "../models/User.js";
import { generateToken } from "../middleware/jwt.js";

export async function createUser(req, res){
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({msg: "Benutzer wurde erstellt!", newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"})
    }
}

export async function login(req, res){
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if (!user) return res.status(404).json({msg: "Benutzer nicht gefunden!"});

        const passwordMatch = user.authenticate(password);

        if (!passwordMatch) return res.status(401).json({msg: "Fehlerhafte Anmeldedaten!"});

        const token = generateToken({userId: user._id});

        return res.status(200).cookie("jwt", token, {httpOnly:true, maxAge: 60*60*1000}).json({msg:"Anmeldung erfolgreich!"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"})
    }
}

export async function payIn(req, res){
    try {
        const response = await User.findByIdAndUpdate(req.user.userId, {balance:+req.body.balance}, {new:true});
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"})
    }
}