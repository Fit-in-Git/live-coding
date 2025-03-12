import jwt from "jsonwebtoken";
import User from "../models/User.js";

export function generateToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h"
    });
};

function verifyToken(token){
    return jwt.verify(token, process.env.JWT_SECRET);
};

export async function authenticate(req, res, next){
    try {
        const token = req.cookies.jwt;

        console.log({token});

        if (!token){
            return res.status(401).json({msg: "Authentifizierung fehlgeschlagen!"});
        };

        const decoded = verifyToken(token);
        
        const user = await User.findById(decoded.userId);
        console.log({decoded, user});

        req.user = {userId:user._id, roles:user.roles};
        next();
    } catch (error) {
        return res.status(403).json({msg: "Authentifizierung fehlerhaft!"})
    }
}