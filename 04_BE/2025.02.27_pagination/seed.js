import { Product } from "./models/Product.js";
import connectDB from "./libs/dbConnect.js";

connectDB();

await Product.deleteMany();

const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Pink"];
const animals = ["Cat", "Dog", "Rabbit", "Turtle", "Hamster", "Guinea Pig", "Chinchilla", "Goat"];
const types = ["Food", "Toy", "Cage", "Bed", "Treats", "Toilet", "Harness", "Hat"];

const productsToCreate = [];

for (let i = 0; i < 1000; i++){
    const color = colors[Math.floor(Math.random() * colors.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const type = types[Math.floor(Math.random() * types.length)];

    const name = `${color} ${animal} ${type}`;

    const price = Math.floor(Math.random() * 99) + 1;
    productsToCreate.push({name, price});
}

await Product.insertMany(productsToCreate);
console.log("Seeding sucessful!");

process.exit(0);