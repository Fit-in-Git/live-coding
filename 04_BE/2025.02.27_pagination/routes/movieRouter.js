import { Router } from "express";
import * as movie from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter
    .get("/", movie.getAllMovies)

export default movieRouter;