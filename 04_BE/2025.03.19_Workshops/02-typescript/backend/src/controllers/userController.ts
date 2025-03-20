import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req:Request, res:Response)=>{
    try {
        const {name, email, password} = req.body;
        const newUser = new User({name, email, password});

        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({msg: "Serverfehler"})
    }
}