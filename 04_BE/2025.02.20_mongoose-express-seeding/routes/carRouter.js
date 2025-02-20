import { Router } from "express";
// import { createCar } from "../controllers/carController.js";
import * as car from "../controllers/carController.js"


const carRouter = Router();

carRouter
    .post("/", car.createCar)

export default carRouter;