import express from "express";
import { crearCategoria, obtenerCategorias, actualizarCategoria, eliminarCategoria } from "../controllers/categoriaServicio.controller.js";

const router = express.Router();

router.post("/", crearCategoria);
router.get("/", obtenerCategorias);
router.put("/:id", actualizarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;
