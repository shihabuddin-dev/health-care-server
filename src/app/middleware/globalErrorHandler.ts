/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import status from "http-status";

export const globalErrorHandler=(err: any, req: Request, res: Response, next: NextFunction) => {
  if(envVars.NODE_ENV==="development"){
    console.log("Error From Global Error Handler", err);
  }

  const statusCode=status.INTERNAL_SERVER_ERROR || 500;
  const message="Internal Server Error"; 
  res.status(statusCode).json({
    success: false,
    message: message,
    error: err.message,
  });
}
