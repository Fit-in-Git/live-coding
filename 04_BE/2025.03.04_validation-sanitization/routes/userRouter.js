import { Router } from "express";
import * as user from "../controllers/userController.js";
import validateRequest from "../middleware/validateRequest.js";
import validateUser from "../validation/userValidation.js";

const userRouter = Router();

userRouter
    .post("/", validateRequest(validateUser), user.createUser)

export default userRouter;