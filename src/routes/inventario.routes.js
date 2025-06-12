// routes/inventario.routes.js
import express from "express";
import {
  getInventarios,
  getInventarioById,
  createInventario,
  updateInventario,
  deleteInventario
} from "../controllers/inventario.controller.js";

const router = express.Router();

router.get("/", getInventarios);
router.get("/:id", getInventarioById);
router.post("/", createInventario);
router.put("/:id", updateInventario);
router.delete("/:id", deleteInventario);

export default router;
