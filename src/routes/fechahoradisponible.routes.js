// src/routes/fechahoradisponible.routes.js
import { Router } from "express";
import { crearDisponibilidad, obtenerDisponibilidades } from "../controllers/fechahoradisponible.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDisponibilidadSchema } from "../schemas/fechahoradisponible.schema.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/disponibilidad", auth, validateSchema(createDisponibilidadSchema), crearDisponibilidad);
router.get("/disponibilidad", auth, obtenerDisponibilidades);

export default router;
