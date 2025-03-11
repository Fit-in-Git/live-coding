import {Router} from "express";
import * as user from "../controllers/userController.js";
import { authenticate } from "../middleware/jwt.js";
import { roleCheck } from "../middleware/roleCheck.js";

const userRouter = Router();

userRouter
    .post("/", user.createUser)
    .post("/login", user.userLogin)
    .get("/", authenticate, user.dashboard)
    .put("/", authenticate, roleCheck(["admin"]), user.editUser)

export default userRouter;