import User from "../models/User.js";
import { generateToken } from "../middleware/jwt.js";

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({msg:"Neuer Benutzer gespeichert!", user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"});
    }
};

export const userLogin = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (user){
            const isAuthenticated = await user.authenticate(password);
            if (isAuthenticated){
                return res.status(200).json({msg:"Login erfolgreich!", token: generateToken({name:user.name, email, roles:user.roles})})
            }
            return res.status(401).json({msg: "Falsche Zugangsdaten"})
        }
        return res.status(404).json({msg: "Benutzer nicht gefunden!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"});
    }
};

export const dashboard = async(req, res) => {
    try {
        console.log("req.user", req.user);
        const user = req.user;
        res.status(200).json({msg: `Hallo ${user.name}`});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"});
    }
}

export const editUser = async(req, res) => {
    try {
        res.status(200).json({msg: "User wurde geändert!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"});
    }
}