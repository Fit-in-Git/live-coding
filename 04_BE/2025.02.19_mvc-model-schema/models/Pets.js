import { Schema, model } from "mongoose";

const petSchema = new Schema({
    name: String,
    species: String,
    breed:String,
    age: Number,
    owner: String
});

const Pet = model("Pet", petSchema);

export default Pet;