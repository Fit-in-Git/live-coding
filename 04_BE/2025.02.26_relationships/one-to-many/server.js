import express from "express";
import connectDB from "./libs/dbConnect.js";
import userRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.use((error, req, res, next)=>{
  console.log(error);
  res.status(500).json(error);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
