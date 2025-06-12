// src/controllers/tipoPago.controller.js
import TipoPago from "../models/tipoPago.model.js";

export const getTiposPago = async (req, res) => {
  const data = await TipoPago.find();
  res.json(data);
};

export const createTipoPago = async (req, res) => {
  const nuevo = new TipoPago(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};