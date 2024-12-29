import { Router } from "express";
import {
  createComment,
  deleteCommentById,
  getPostComments,
} from "../controllers/comment.controller";

const router = Router();

router.route("/:postId").get(getPostComments).post(createComment);

router.delete("/:id", deleteCommentById);

export default router;
