import type { NextFunction, Request, Response } from "express";
import Post from "../models/post.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import {
  CODE_404,
  CODE_200,
  DATA_FETCH_SUCCESS,
  NO_DATA_FOUND,
  CODE_500,
  INTERNAL_SERVER_ERROR,
  CODE_201,
  CREATE_SUCCESS,
  DELETE_SUCCESS,
  ERROR_NO_AUTH,
  CODE_400,
  USER_NOT_FOUND,
} from "../utils/constants";
import User from "../models/user.model";
import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      auth?: any;
    }
  }
}

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 5;

  const skip = (page - 1) * limit;

  const posts = await Post.find()
    .populate("user", "username")
    .limit(limit)
    .skip(skip);

  if (!posts) return next(new ApiError(NO_DATA_FOUND, CODE_404));

  const totalPosts = await Post.countDocuments();
  const hasMorePosts = page * limit < totalPosts;

  res
    .status(CODE_200)
    .json(
      new ApiResponse(CODE_200, { posts, hasMorePosts }, DATA_FETCH_SUCCESS)
    );
};

export const getPostBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const slug = req.params.slug;

  const post = await Post.findOne({ slug }).populate("user", "username, img");

  if (!post) return next(new ApiError(NO_DATA_FOUND, CODE_404));

  res
    .status(CODE_200)
    .json(new ApiResponse(CODE_200, post, DATA_FETCH_SUCCESS));
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return next(new ApiError(ERROR_NO_AUTH, CODE_400));

  const user = await User.findOne({ clerkUserId });

  if (!user) return next(new ApiError(USER_NOT_FOUND, CODE_404));

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const postBody = req.body;

  const createdPost = await Post.create({ user: user._id, slug, ...postBody });

  if (!createdPost) return next(new ApiError(INTERNAL_SERVER_ERROR, CODE_500));

  res
    .status(CODE_201)
    .json(new ApiResponse(CODE_201, createdPost, CREATE_SUCCESS));
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return next(new ApiError(ERROR_NO_AUTH, CODE_400));

  const user = await User.findOne({ clerkUserId });

  if (!user) return next(new ApiError(USER_NOT_FOUND, CODE_404));

  const deletedPost = await Post.findByIdAndDelete({ _id: id, user: user._id });

  if (!deletedPost) return next(new ApiError(NO_DATA_FOUND, CODE_404));

  res
    .status(CODE_200)
    .json(new ApiResponse(CODE_200, deletedPost, DELETE_SUCCESS));
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT as string,
  publicKey: process.env.IK_PUBLIC_KEY as string,
  privateKey: process.env.IK_PRIVATE_KEY as string,
});

export const uploadAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = imagekit.getAuthenticationParameters();
};
