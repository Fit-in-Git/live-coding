import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors({credentials:true, origin:"http://localhost:5173"}));
app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
