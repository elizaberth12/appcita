//src/routes/notificacion.routes.js
import express from "express";
import {
  getNotificaciones,
  createNotificacion,
  marcarComoLeida
} from "../controllers/notificacion.controller.js";

const router = express.Router();

router.get("/", getNotificaciones);
router.post("/", createNotificacion);
router.put("/:id/leida", marcarComoLeida);

export default router;