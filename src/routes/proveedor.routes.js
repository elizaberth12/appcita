//src/routes/proveedor.routes.js
import express from "express";
import {
  getProveedores,
  createProveedor
} from "../controllers/proveedor.controller.js";

const router = express.Router();

router.get("/", getProveedores);
router.post("/", createProveedor);

export default router;