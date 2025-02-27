import { Product } from "../models/Product.js";

export const getAllProducts = async (req, res, next)=>{
    try {
        const {currentPage = 1, sortBy = "createdAt", sortDirection = "asc", maxPrice} = req.query;

        const limit = 15;
        const skip = (currentPage - 1) * limit;
        /*
        Seite 1: ( 1 - 1 ) * 15 = 0
        Seite 2: ( 2 - 1 ) * 15 = 15
        Seite 3: ( 3 - 1 ) * 15 = 30
        */

        const query = Product.find();
        query.skip(skip).limit(limit); // Pagination
        query.sort({[sortBy]:sortDirection}) // Sortieren

        if (maxPrice){
            query.where("price").lt(maxPrice);
        }

        const products = await query.exec();

        res.status(200).json({data:products});
    } catch (error) {
        next(error);
    }
}