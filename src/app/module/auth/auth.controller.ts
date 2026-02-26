import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerPatient(req.body);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Patient Registered Successfully",
    data: result,
  });
  return result;
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Patient Logged In Successfully",
    data: result,
  });
});

export const AuthController = {
  registerPatient,
  loginUser,
};
