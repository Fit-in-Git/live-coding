import { Zoo } from "../models/Zoo.js";

export const createZoo = async (req, res) => {
    try {
        const newZoo = await Zoo.create(req.body);
        res.status(201).json({msg: "Zoo erstellt", newZoo});
    } catch (error) {
        res.status(500).json({msg: "Server error", error});
    }
}