import { Router } from "express";
import { BlogPost } from "../models/BlogPost.js";

const blogPostRouter = Router();

blogPostRouter
    .post("/", async (req, res)=>{
        try {
            const newPost = await BlogPost.create(req.body);
            res.status(201).json({data: newPost})
        } catch (error) {
            res.status(500).json({msg: "Server error", error})
        }
    })

export default blogPostRouter;