import { Router } from "express";
import { Post } from "../models/Post.js";

const postRouter = Router();

postRouter
    .get("/", async (req, res, next)=>{
        try {
            const response = await Post.find();
            res.status(200).json({data: response});
        } catch (error) {
            next(error);
        }
    })
    .get("/:id", async (req, res, next)=>{
        try {
            const {id} = req.params;

            let post;
            if (req.query.include === "owner"){
                // post = await Post.findById(id).populate("owner");
                // Nested populate für posts
                post = await Post.findById(id).populate({path: "owner", populate:{path:"posts"}})
            } else {
                post = await Post.findById(id);
            }

            res.status(200).json({data:post});
        } catch (error) {
            next(error);
        }
    })

export default postRouter