// Erstellt einen productsRouter mit einer get("/") Route

import { Router } from "express";

const productsRouter = Router();

let products = [{id:1, type:"Kühlschrank"}, {id:2, type:"Mixer"}]

productsRouter
    .get("/", (req, res)=>{
        res.json({data:products})
    })
    .get("/:id", (req, res)=>{
        const {id} = req.params;
        const product = products.find(prod=>prod.id === +id);
        res.json({data:product})
    })
    .post("/", (req, res)=>{
        const newProduct = {id:products.length + 1, ...req.body};
        products.push(newProduct);
        res.json({data:products});
    })
    .delete("/:id", (req, res)=>{
        const {id} = req.params;
        products = products.filter(prod => prod.id !== +id);
        res.json({data:products});
    })

export default productsRouter;