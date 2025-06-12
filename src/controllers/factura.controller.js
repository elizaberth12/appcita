import Factura from "../models/factura.model.js";

export const getFacturas = async (req, res) => {
  const facturas = await Factura.find().populate("cliente");
  res.json(facturas);
};

export const createFactura = async (req, res) => {
  const nueva = new Factura(req.body);
  const guardada = await nueva.save();
  res.status(201).json(guardada);
};

export const updateFactura = async (req, res) => {
  const actualizada = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizada);
};

export const deleteFactura = async (req, res) => {
  await Factura.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
