import express from "express";
import connectDB from "./libs/dbConnect.js";
import productRouter from "./routes/productRouter.js";
import movieRouter from "./routes/movieRouter.js";
import cors from "cors";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/movies", movieRouter);

app.use((error, req, res, next)=>{
  console.log(error);
  res.status(500).json({msg: "Server Error!"})
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
