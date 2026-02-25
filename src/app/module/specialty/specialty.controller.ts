/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);
    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to Create specialties",
      error: err.message,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const result = await SpecialtyService.getAllSpecialties();
    res.status(200).json({
      success: true,
      message: "Specialties retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve specialties",
      error: err.message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
};
