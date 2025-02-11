import express from "express";
import productsRouter from "./routes/products.js";
import feedbackRouter from "./routes/feedback.js";

const app = express();

app.use(express.json()); // body-parser

app.use("/products", productsRouter);
app.use("/feedback", feedbackRouter);

app.listen(3000, ()=>{
    console.log("Server hört auf Port 3000!");
});