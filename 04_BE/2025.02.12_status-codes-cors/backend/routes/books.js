import { Router } from "express";
import fs from "fs";

const booksRouter = Router();

booksRouter
    .get("/", (req, res, next)=>{
        try {
            const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
            res.status(200).json({data:data.books})
        } catch (error) {
            next(error);
        }
    })
    .post("/", (req, res, next)=>{
        try {
            const {title, author} = req.body;
            const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

            const newBook = {id:data.books.length + 1, title, author};
            data.books.push(newBook);
            fs.writeFileSync("./data.json", JSON.stringify(data));
            resa.status(201).json({newBook});
        } catch (error) {
            next(error);
        }
    })

export default booksRouter;