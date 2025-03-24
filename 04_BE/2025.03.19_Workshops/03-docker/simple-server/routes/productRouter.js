import { Router } from "express";
import * as product from "../controllers/productController.js"

const productRouter = Router();

productRouter
    .post("/", product.createProduct)
    .get("/", product.getAllProducts)

export default productRouter;