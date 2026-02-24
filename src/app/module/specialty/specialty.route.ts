import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router= Router()
router.post("/specialties", SpecialtyController.createSpecialty)

export const SpecialtyRoutes = router