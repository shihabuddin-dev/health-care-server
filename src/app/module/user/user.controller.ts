import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await UserService.createDoctor(payload);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Doctor Created Successfully",
    data: result,
  });
});

export const UserController = {
  createDoctor,
};
