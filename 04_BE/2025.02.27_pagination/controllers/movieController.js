import Movie from "../models/Movie.js";

export const getAllMovies = async (req, res, next)=>{
    try {
        const movies = await Movie.find({length: {$gt: 90}})
        res.status(200).json({data:movies});
    } catch (error) {
        next(error);
    }
}