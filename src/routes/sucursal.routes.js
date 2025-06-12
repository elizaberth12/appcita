import express from "express";
import { crearSucursal, obtenerSucursales, actualizarSucursal, eliminarSucursal } from "../controllers/sucursal.controller.js";

const router = express.Router();

router.post("/", crearSucursal);
router.get("/", obtenerSucursales);
router.put("/:id", actualizarSucursal);
router.delete("/:id", eliminarSucursal);

export default router;
