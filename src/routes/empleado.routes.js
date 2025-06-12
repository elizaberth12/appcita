// routes/empleado.routes.js
import express from "express";
import Empleado from "../models/Empleado.js";

const router = express.Router();

// GET empleados por especialidad
router.get("/especialidad/:especialidad", async (req, res) => {
  try {
    const empleados = await Empleado.find({ especialidad: req.params.especialidad }).populate("usuario", "nombre apellido");
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener empleados." });
  }
});

export default router;
