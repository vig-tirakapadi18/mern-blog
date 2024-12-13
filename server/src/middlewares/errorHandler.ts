import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import { CODE_500, INTERNAL_SERVER_ERROR } from "../utils/constants";

export const errorHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(
    new ApiError(
      error.message || INTERNAL_SERVER_ERROR,
      error.statusCode || CODE_500
    )
  );
};
