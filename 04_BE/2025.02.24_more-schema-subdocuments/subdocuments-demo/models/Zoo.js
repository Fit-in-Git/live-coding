import {Schema, model} from "mongoose";

/*
Wir brauchen 3 Schemas:
animalSchema
locationSchema
zooSchema

Folgende Felder für zooSchema:
    name, location (Schema), admission, foundation, animals (Schema)

Folgende Felder für locationSchema:
    country, city, street (mit Pfaden name, number)

Folgende Felder für animalsSchema:
    species, sex, amount, characteristcs (mit Pfaden für continent, predators, food, lifeExpectancy)
*/

const animalsSchema = new Schema({
    species: String,
    sex: String,
    amount: Number,
    characteristics: {
        continent: [String],
        predators: [String],
        food: [String],
        lifeExpectancy: String
    }
})

const locationSchema = new Schema({
    country: String,
    city: String,
    street: {
        name: String,
        number: Number
    }
});

const zooSchema = new Schema({
    name: {
        type:String,
        required: true,
        unique: true
    },
    location: locationSchema,
    admission: Number,
    foundation: Date,
    animals: [animalsSchema]
});

export const Zoo = model("Zoo", zooSchema);