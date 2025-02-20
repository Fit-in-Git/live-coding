import {Schema, model} from "mongoose";

const carSchema = new Schema({
    model: {type:String, required:true},
    type: String,
    fuel: String,
    color: String,
    buildYear: Date,
    mileage: Number,
    hp: Number,
    vin: String
});

export const Car = model("Car", carSchema);