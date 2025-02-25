import { Product } from "../models/Product.js";

export const createProduct = async (req, res, next)=>{
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({data:newProduct});
    } catch (error) {
        next(error);
    }
}

export const getProducts = async (req, res, next)=>{
    try {
        console.log(req.query);
        const filter = {};
        if (!req.query.includeDeleted){
            filter.deletedAt = null
        }
        console.log({filter});
        const products = await Product.find(filter);
        res.status(200).json({data:products});
    } catch (error) {
        next(error);
    }
}

export const replaceProduct = async (req, res, next)=>{
    try {
        const {id} = req.params;
        // const update = await Product.replaceOne({_id:id}, req.body)
        /*
        Beim Updaten müssen die Schema-Validatoren explizit aufgerufen werden, mit runValidators: true
        */
        const opts = {runValidators:true, new:true}
        const update = await Product.findOneAndReplace({_id:id}, req.body, opts);
        res.status(200).json({data: update})
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res, next)=>{
    try {
        const {id} = req.params;
        /*
        Mit der Option upsert:true können wir ein Dokument hinzufügen, wenn die id nicht gefunden wurde
        */
        const opts = {new:true, upsert:true};
        const updated = await Product.findByIdAndUpdate(id, req.body, opts);
        res.status(200).json({data: updated})
    } catch (error) {
        next(error);
    }
}

export const softDeleteProduct = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const opts = {new:true, runValidators:true};
        const result = await Product.findOneAndUpdate({_id:id}, {deletedAt:new Date()}, opts);
        res.status(200).json({data: result});
    } catch (error) {
        next(error);
    }
}

export const restoreProduct = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if (!product){
            return res.status(404).json({msg: "Produkt nicht gefunden!"})
        }
        if (!product.deletedAt){
            return res.status(400).json({msg: "Produkt ist nicht soft gelöscht!"})
        }
        await product.restore();
        res.status(200).json({msg: "Produkt wurde wiederhergestellt!"})
    } catch (error) {
        next(error);
    }
}