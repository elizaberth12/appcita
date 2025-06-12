import { Router } from "express";
import {
  createCita,
  deleteCita,
  getCita,
  getCitas,
  updateCita,
} from "../controllers/citas.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCitaSchema } from "../schemas/cita.schema.js";

const router = Router();

router.get("/NuevaCita", auth, getCitas);
router.post("/NuevaCita", auth, validateSchema(createCitaSchema), createCita);
router.get("/NuevaCita/:id", auth, getCita);
router.put("/NuevaCita/:id", auth, updateCita);
router.delete("/NuevaCita/:id", auth, deleteCita);

export default router;
