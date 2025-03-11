import jwt from "jsonwebtoken";

export function generateToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h"
    });
};

function verifyToken(token){
    return jwt.verify(token, process.env.JWT_SECRET);
};

export function authenticate(req, res, next){
    try {
        const token = req.headers?.authorization?.split(" ")[1];

        console.log({token});

        if (!token){
            return res.status(401).json({msg: "Authentifizierung fehlgeschlagen!"});
        };

        const decoded = verifyToken(token);
        console.log({decoded});
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({msg: "Authentifizierung fehlerhaft!"})
    }
}