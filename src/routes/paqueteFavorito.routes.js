//src/routes/paqueteFavorito.routes.js
import express from "express";
import {
  getPaquetesFavoritos,
  createPaqueteFavorito
} from "../controllers/paqueteFavorito.controller.js";

const router = express.Router();

router.get("/", getPaquetesFavoritos);
router.post("/", createPaqueteFavorito);

export default router;