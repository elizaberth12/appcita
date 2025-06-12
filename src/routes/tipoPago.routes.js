//src/routes/tipoPago.routes.js
import express from "express";
import {
  getTiposPago,
  createTipoPago
} from "../controllers/tipoPago.controller.js";

const router = express.Router();

router.get("/", getTiposPago);
router.post("/", createTipoPago);

export default router;
