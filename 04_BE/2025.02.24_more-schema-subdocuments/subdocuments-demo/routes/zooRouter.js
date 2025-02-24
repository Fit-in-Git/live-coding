import {Router} from "express";
import * as zoo from "../controllers/zooController.js";

const zooRouter = Router();

zooRouter
    .post("/", zoo.createZoo)

export default zooRouter;