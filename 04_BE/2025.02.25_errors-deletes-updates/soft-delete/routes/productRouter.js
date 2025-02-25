import { Router } from "express";
import * as product from "../controllers/productController.js";

const productRouter = Router();

productRouter
    .post("/", product.createProduct)
    .get("/", product.getProducts)
    .put("/:id", product.replaceProduct)
    .patch("/:id", product.updateProduct)
    .patch("/restore/:id", product.restoreProduct)
    .delete("/:id", product.softDeleteProduct)

export default productRouter