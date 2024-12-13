import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import postRouter from "./routes/post.route";
import commentRouter from "./routes/comment.route";
import mongoose from "mongoose";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_CONN_STR as string)
  .then(() => console.log("Connection established with MongoDB!"))
  .catch((error) => console.log(error));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

const PORT = process.env.PORT;

app.listen(5000, () => console.log(`Server listening on port ${PORT}!`));
