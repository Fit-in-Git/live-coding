import express from "express";
import connectDB from "./libs/dbConnect.js";
import blogPostRouter from "./routes/blogPostRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/blogPosts", blogPostRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
