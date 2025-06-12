//src/controllers/pagoEmpleado.controller.js
import PagoEmpleado from "../models/pagoEmpleado.model.js";

export const getPagosEmpleado = async (req, res) => {
  const data = await PagoEmpleado.find().populate("empleado");
  res.json(data);
};

export const createPagoEmpleado = async (req, res) => {
  const nuevo = new PagoEmpleado(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};