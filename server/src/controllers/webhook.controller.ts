import type { NextFunction, Request, Response } from "express";
import { Webhook } from "svix";
import {
  CODE_200,
  CODE_400,
  CODE_500,
  WEBHOOK_RECEIVE_FAIL,
  WEBHOOK_RECEIVED,
  WEBHOOK_VFN_FAIL,
} from "../utils/constants";
import ApiError from "../utils/ApiError";
import User from "../models/user.model";
import ApiResponse from "../utils/ApiResponse";

export const clerkWebHook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) throw new Error("Webhook Secret not Found!");

  const payload = req.body;
  const {
    "webhook-id": webhookId,
    "webhook-timestamp": webhookTimestamp,
    "webhook-signature": webhookSignature,
  } = req.headers;

  const headers = {
    "webhook-id": webhookId as string,
    "webhook-timestamp": webhookTimestamp as string,
    "webhook-signature": webhookSignature as string,
  };

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: any;
  try {
    evt = wh.verify(payload, headers);
  } catch (error) {
    res.status(CODE_400).json(new ApiError(WEBHOOK_VFN_FAIL, CODE_400));
    return;
  }

  console.log(evt.data);

  if (evt.type === "user.created") {
    const newUser = await User.create({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_img_url,
    });

    if (!newUser) return next(new ApiError(WEBHOOK_RECEIVE_FAIL, CODE_500));
  }

  res.status(CODE_200).json(new ApiResponse(CODE_200, {}, WEBHOOK_RECEIVED));
};
