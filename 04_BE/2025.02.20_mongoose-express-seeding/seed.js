import { faker } from "@faker-js/faker";
import connectDb from "./libs/dbConnect.js";
import { Car } from "./models/Car.js";

connectDb();

const deleteCars = async()=>{
    try {
        await Car.deleteMany({});
    } catch (error) {
        console.log(error);
    }
}

const generateCars = (amount)=>{
    const newCars = [];

    for (let i=0; i < amount; i++){
        const newCar = new Car({
            model: faker.vehicle.manufacturer(),
            type: faker.vehicle.type(),
            fuel: faker.vehicle.fuel(),
            color: faker.vehicle.color(),
            buildYear: faker.date.past({years:50}),
            mileage: faker.number.int({min:100, max:500000}),
            hp: faker.number.int({min:28, max:500}),
            vin: faker.vehicle.vin()
        })

        newCars.push(newCar);
    }
    return newCars;
}

// process.argv
/* 
Aufruf der seed.js
- entweder: node --env-file=.env seed.js 20
- oder node --env-file=.env seed.js delete 20
*/

/*
process.argv =
[
"Pfad zu Node",
"Pfad zur seed.js",
"Drittes Argument im Terminal"
]
*/

console.log(process.argv.slice(2));
const args = process.argv.slice(2);

try {
    if (!args.includes("delete")){
        const cars = generateCars(args[0]);
        await Car.insertMany(cars)
    } else {
        await deleteCars();
        console.log("Alle Cars-Dokumente gelöscht!");
        const cars = generateCars(args[1]);
        await Car.insertMany(cars);
    }
    console.log("Alle Dokumente wurden erstellt");
    process.exit(0)
} catch (error) {
    console.log({error});
    process.exit(1);
}
