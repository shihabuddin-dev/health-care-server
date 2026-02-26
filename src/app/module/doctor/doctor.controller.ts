import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { DoctorService } from "./doctor.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctors Fetched Successfully",
    data: result,
  });
});

const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DoctorService.getDoctorById(id as string);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctors Fetched Successfully",
    data: result,
  });
});
//const updateDoctor = catchAsync(
//const deleteDoctor = catchAsync(

export const DoctorController = {
  getAllDoctors,
  getDoctorById,
};
