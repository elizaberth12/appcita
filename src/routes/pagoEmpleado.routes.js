//src/routes/pagoEmpleado.routes.js
import express from "express";
import {
  getPagosEmpleado,
  createPagoEmpleado
} from "../controllers/pagoEmpleado.controller.js";

const router = express.Router();

router.get("/", getPagosEmpleado);
router.post("/", createPagoEmpleado);

export default router;