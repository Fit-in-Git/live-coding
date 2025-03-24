import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    inStock: {
        type:Boolean,
        default: true
    }
});

const Product = model("Product", productSchema);

export default Product;