/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err: any) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Failed to Fetch",
        error: err.message,
      });
    }
  };
};