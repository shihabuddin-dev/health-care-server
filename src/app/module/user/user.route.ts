<<<<<<< HEAD
import { Router } from "express"
import { UserController } from "./user.controller"

const router= Router()

router.post("/create-doctor", UserController.createDoctor)
// "/create-admin", UserController.createDoctor);
// router.post("/create-superAdmin", UserController.createDoctor);
export const UserRoutes= router
=======
import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post("/create-doctor", validateRequest(createDoctorZodSchema), UserController.createDoctor);
// "/create-admin", UserController.createDoctor);
// router.post("/create-superAdmin", UserController.createDoctor);
export const UserRoutes = router;
>>>>>>> b244aa3f5837ad3ade11de1c7068dca793bc86d6
