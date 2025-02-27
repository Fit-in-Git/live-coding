import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title:String
});

const Movie = new model("Movie", movieSchema);

export default Movie;