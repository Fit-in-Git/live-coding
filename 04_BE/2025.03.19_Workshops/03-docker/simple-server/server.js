import express from "express";
import cors from "cors";
import productRouter from "./routes/productRouter.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
