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
} from "../utils/constants";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const posts = await Post.find();

  if (!posts) return next(new ApiError(NO_DATA_FOUND, CODE_404));

  res
    .status(CODE_200)
    .json(new ApiResponse(CODE_200, posts, DATA_FETCH_SUCCESS));
};

export const getPostBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const slug = req.params.slug;

  const post = await Post.findOne({ slug });

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
  const postBody = req.body;

  const createdPost = await Post.create(postBody);

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

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) return next(new ApiError(NO_DATA_FOUND, CODE_404));

    res.status(CODE_200).json(new ApiResponse(CODE_200, deletedPost, DELETE_SUCCESS));
};
