import { Car } from "../models/Car.js";

export const createCar = async (req, res)=>{
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json({msg: "Car hinzugefügt", newCar})
        /*
        Alternative mit save()
        const newCar = new Car(req.body);
        await newCar.save();
        */
    } catch (error) {
        console.log({error});
        res.status(500).json({msg: "Serverfehler!"})
    }
}