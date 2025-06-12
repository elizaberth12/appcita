import express from "express";
import { crearDescanso, obtenerDescansos, actualizarDescanso, eliminarDescanso } from "../controllers/descanso.controller.js";

const router = express.Router();

router.post("/", crearDescanso);
router.get("/", obtenerDescansos);
router.put("/:id", actualizarDescanso);
router.delete("/:id", eliminarDescanso);

export default router;
