import { Router } from "express";
import { clerkWebHook } from "../controllers/webhook.controller";
import bodyParser from "body-parser";

const router = Router();

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebHook
);

export default router;
