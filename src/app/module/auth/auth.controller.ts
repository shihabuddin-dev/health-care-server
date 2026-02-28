import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";
<<<<<<< HEAD

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerPatient(req.body);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Patient Registered Successfully",
    data: result,
  });
  return result;
=======
import { tokenUtils } from "../../utils/token";
import ms, { StringValue } from "ms";
import { envVars } from "../../config/env";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const maxAge = ms(envVars.ACCESS_TOKEN_EXPIRES_IN as StringValue);
  console.log({ maxAge });
  const payload = req.body;
  const result = await AuthService.registerPatient(payload);
  const { accessToken, refreshToken, token, ...rest } = result;

  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, token as string);

  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Patient registered successfully",
    data: {
      token,
      accessToken,
      refreshToken,
      ...rest,
    },
  });
>>>>>>> b244aa3f5837ad3ade11de1c7068dca793bc86d6
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
<<<<<<< HEAD
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Patient Logged In Successfully",
    data: result,
  });
});

=======
  const { accessToken, refreshToken, token, ...rest } = result;

  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, token);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      token,
      accessToken,
      refreshToken,
      ...rest,
    },
  });
});
>>>>>>> b244aa3f5837ad3ade11de1c7068dca793bc86d6
export const AuthController = {
  registerPatient,
  loginUser,
};
