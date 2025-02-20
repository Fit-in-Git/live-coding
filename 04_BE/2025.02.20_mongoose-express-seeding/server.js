import express from "express";
import connectDb from "./libs/dbConnect.js";
import carRouter from "./routes/carRouter.js";

connectDb();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use("/cars", carRouter);

app.listen(PORT, ()=>{
    console.log(`Der Server hört auf port: ${PORT}`)
})