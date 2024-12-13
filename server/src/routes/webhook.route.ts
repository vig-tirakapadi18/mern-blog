import { Router } from "express";
import { clearWebHook } from "../controllers/webhook.controller";
import bodyParser from "body-parser";

const router = Router();

router.get(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clearWebHook
);

export default router;
