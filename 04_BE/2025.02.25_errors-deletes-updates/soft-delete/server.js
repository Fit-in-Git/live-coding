import express from "express";
import connectDB from "./libs/dbConnect.js";
import productRouter from "./routes/productRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.use((error, req, res, next)=>{
  console.log({error});
  res.status(500).json({error});
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
