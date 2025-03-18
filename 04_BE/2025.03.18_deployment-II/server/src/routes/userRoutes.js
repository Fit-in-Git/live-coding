import { Router } from "express";
import {
  createUser,
  deleteUser,
  depositMoney,
  getUserData,
  login,
  logout,
  withdrawMoney,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/auth.js";
import { roleCheck } from "../middleware/roleCheck.js";

const router = Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/me", authenticate, getUserData);
router.put("/deposit", authenticate, depositMoney);
router.put("/withdraw", authenticate, withdrawMoney);
router.delete("/delete/:id", authenticate, roleCheck(["admin"]), deleteUser);
router.post("/logout", logout);

export default router;
