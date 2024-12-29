import { NextFunction, Request, Response } from "express";
import Comment from "../models/comment.model";
import ApiError from "../utils/ApiError";
import {
  CODE_200,
  CODE_201,
  CODE_400,
  CODE_403,
  CODE_404,
  CREATE_SUCCESS,
  DATA_FETCH_SUCCESS,
  DELETE_SUCCESS,
  ERROR_NO_AUTH,
  FAILED_TO_CREATE,
  NO_DATA_FOUND,
} from "../utils/constants";
import ApiResponse from "../utils/ApiResponse";
import User, { IUser } from "../models/user.model";

export const getPostComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postId = req.params.postId;

  const comments = await Comment.find({ post: postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  if (!comments) return next(new ApiError(NO_DATA_FOUND, CODE_404));

  res
    .status(CODE_200)
    .json(new ApiResponse(CODE_200, comments, DATA_FETCH_SUCCESS));
};

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clerkUserId = req.auth.userId;
  const postId = req.params.postId;

  if (!clerkUserId) return next(new ApiError(ERROR_NO_AUTH, CODE_400));

  const user = await User.findOne({ clerkUserId });

  if (!user) return next(new ApiError(NO_DATA_FOUND, CODE_404));

  const newComment = new Comment({ ...req.body, user: user._id, post: postId });

  const savedComment = await newComment.save();

  if (!savedComment || !newComment)
    return next(new ApiError(FAILED_TO_CREATE, CODE_400));

  res
    .status(CODE_201)
    .json(new ApiResponse(CODE_201, { comment: savedComment }, CREATE_SUCCESS));
};

export const deleteCommentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return next(new ApiError(ERROR_NO_AUTH, CODE_400));

  const user = await User.findOne({ clerkUserId });

  const deletedComment = await Comment.findByIdAndDelete({
    _id: id,
    user: user?._id,
  });

  if (!deletedComment) return next(new ApiError(ERROR_NO_AUTH, CODE_403));

  res.status(CODE_200).json(new ApiResponse(CODE_200, null, DELETE_SUCCESS));
};
