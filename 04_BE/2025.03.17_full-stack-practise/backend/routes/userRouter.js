import { Router } from "express";
import * as user from "../controllers/userController.js";

const userRouter = Router();

userRouter
    .post("/register", user.createUser)
    .post("/login", user.login)

export default userRouter;