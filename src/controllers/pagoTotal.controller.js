//src/controllers/pagoTotal.controller.js
import PagoTotal from "../models/pagoTotal.model.js";

export const getPagosTotales = async (req, res) => {
  const data = await PagoTotal.find().populate("factura");
  res.json(data);
};

export const createPagoTotal = async (req, res) => {
  const nuevo = new PagoTotal(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};