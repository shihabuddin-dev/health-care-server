import { Router } from "express"
import { UserController } from "./user.controller"

const router= Router()

router.post("/create-doctor", UserController.createDoctor)
// "/create-admin", UserController.createDoctor);
// router.post("/create-superAdmin", UserController.createDoctor);
export const UserRoutes= router