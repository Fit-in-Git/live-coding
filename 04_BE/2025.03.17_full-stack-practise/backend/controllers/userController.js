import User from "../models/User.js";
import { generateToken } from "../middleware/jwt.js";

export const createUser = async (req, res) => {
   try{
    const { name, customerId, email, password } = req.body;

    if (!email || !password || !customerId) {
      return res
        .status(400)
        .json({ message: "E-Mail und Passwort werden benötigt!" });
    }

    const user = await User.create({
        name,
        email,
        password,
        customerId,
      });

      res.status(201).json({message: "Benutzer wurde erstellt!", user});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"});
    }
}


export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if (!user) return res.status(404).json({msg: "Benutzer nicht gefunden!"});
        console.log({email, password});
        
        const passwordMatch = await user.authenticate(password);

        if (!passwordMatch) return res.status(401).json({ message: "Die Anmeldedaten sind falsch!" });

        const token = generateToken({ userId: user._id });

        res.status(200).cookie("jwt", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 60 * 1000,
        }).json({ message: "Login successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"});
    }
}