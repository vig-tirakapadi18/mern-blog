import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.route";
import postRouter from "./routes/post.route";
import commentRouter from "./routes/comment.route";
import webhookRouter from "./routes/webhook.route";
import { errorHandler } from "./middlewares/errorHandler";
import { clerkMiddleware } from "@clerk/express";

const app = express();
dotenv.config();
app.use(cors({ origin: process.env.CLIENT_URL as string }));

app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);

app.use(express.json());
app.use(errorHandler);

// app.get("/auth-state", (req: Request, res: Response) => {
//   const authState = req.auth;
//   res.json(authState);
// });

// app.get("/protect", (req: Request, res: Response, next: NextFunction) => {
//   const { userId } = req.auth;

//   if (!userId) return next(new ApiError("Not Authentiated!", CODE_400));

//   res.status(CODE_200).json("Connected!");
// });

// app.get("/protect2", requireAuth(), (req: Request, res: Response, next: NextFunction) => {
//   const { userId } = req.auth;

//   if (!userId) return next(new ApiError("Not Authentiated!", CODE_400));

//   res.status(CODE_200).json("Connected!");
// });

mongoose
  .connect(process.env.MONGO_CONN_STR as string)
  .then(() => console.log("Connection established with MongoDB!"))
  .catch((error) => console.log(error));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

const PORT = process.env.PORT;

app.listen(5000, () => console.log(`Server listening on port ${PORT}!`));
