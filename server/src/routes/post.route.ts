import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostBySlug,
  uploadAuth,
} from "../controllers/post.controller";

const router = Router();

router.get("/", getAllPosts);
router.get("/upload-auth", uploadAuth)
router.get("/:slug", getPostBySlug);
router.post("/create-post", createPost);
router.delete("/delete-post/:id", deletePost);

export default router;
