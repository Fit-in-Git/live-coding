import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"})
        
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Serverfehler!"})
    }
}