import { Router } from "express";
import * as products from "../controllers/productController.js";

const productRouter = Router();

productRouter
    .get("/", products.getAllProducts)

export default productRouter;