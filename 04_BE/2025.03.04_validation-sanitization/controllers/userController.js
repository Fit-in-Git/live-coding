import { User } from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const response = await User.create(req.body);
        res.status(201).json({msg: "Controller erreicht, validierung erfolgreich!", data: response})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
