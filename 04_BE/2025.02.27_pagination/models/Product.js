import {Schema, model} from "mongoose";

const productSchema = new Schema({
    name: String,
    price: Number
}, {timestamps: true});

export const Product = model("Product", productSchema);