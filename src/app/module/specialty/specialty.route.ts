import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router= Router()
<<<<<<< HEAD
router.post("/", SpecialtyController.createSpecialty)
router.get("/", SpecialtyController.getAllSpecialties)
router.patch("/:id", SpecialtyController.updateSpecialty)
router.delete("/:id", SpecialtyController.deleteSpecialty)
=======
router.post("/",checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.createSpecialty)
router.get("/", SpecialtyController.getAllSpecialties)
router.patch("/:id",checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.updateSpecialty)
router.delete("/:id",checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.deleteSpecialty)
>>>>>>> b244aa3f5837ad3ade11de1c7068dca793bc86d6

export const SpecialtyRoutes = router