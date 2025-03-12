import {Router} from "express";
import * as user from "../controllers/userController.js";
import { authenticate } from "../middleware/jwt.js";

const userRouter = Router();

userRouter
    .post("/sign-up", user.createUser)
    .post("/sign-in", user.login)
    .patch("/pay-in", authenticate, user.payIn)

export default userRouter;