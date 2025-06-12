// src/routes/detalleEmpleado.routes.js
import { Router } from "express";
import * as detalleEmpleadoCtrl from "../controllers/detalleEmpleado.controller.js";

const router = Router();

router.get("/", detalleEmpleadoCtrl.getDetallesEmpleado);
router.post("/", detalleEmpleadoCtrl.createDetalleEmpleado);
router.put("/:id", detalleEmpleadoCtrl.updateDetalleEmpleado);
router.delete("/:id", detalleEmpleadoCtrl.deleteDetalleEmpleado);

export default router;
