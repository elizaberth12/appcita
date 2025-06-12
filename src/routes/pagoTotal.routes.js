 // src/routes/pagoTotal.routes.js
import express from "express";
import {
  getPagosTotales,
  createPagoTotal
} from "../controllers/pagoTotal.controller.js";

const router = express.Router();

router.get("/", getPagosTotales);
router.post("/", createPagoTotal);

export default router;