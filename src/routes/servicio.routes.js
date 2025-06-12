import express from "express";
import { crearServicio, obtenerServicios, actualizarServicio, eliminarServicio } from "../controllers/servicio.controller.js";

const router = express.Router();

router.post("/", crearServicio);
router.get("/", obtenerServicios);
router.put("/:id", actualizarServicio);
router.delete("/:id", eliminarServicio);

export default router;
