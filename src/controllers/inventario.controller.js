// controllers/inventario.controller.js
import Inventario from "../models/inventario.model.js";

export const getInventarios = async (req, res) => {
  const data = await Inventario.find().populate("proveedor");
  res.json(data);
};

export const getInventarioById = async (req, res) => {
  const item = await Inventario.findById(req.params.id).populate("proveedor");
  res.json(item);
};

export const createInventario = async (req, res) => {
  const nuevo = new Inventario(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

export const updateInventario = async (req, res) => {
  const actualizado = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
};

export const deleteInventario = async (req, res) => {
  await Inventario.findByIdAndDelete(req.params.id);
  res.json({ message: "Inventario eliminado" });
};
