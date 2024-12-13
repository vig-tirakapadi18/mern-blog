import { NextFunction, Request, Response } from "express";

export const clearWebHook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) throw new Error("Webhook Secret not Found!");

  const payload = req.body;
  const headers = req.headers;

  const wh = new WEBHOOK_SECRET(secret)
};
