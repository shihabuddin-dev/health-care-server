import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post("/create-doctor", validateRequest(createDoctorZodSchema), UserController.createDoctor);
// "/create-admin", UserController.createDoctor);
// router.post("/create-superAdmin", UserController.createDoctor);
export const UserRoutes = router;
