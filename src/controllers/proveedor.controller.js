// src/controllers/proveedor.controller.js
import Proveedor from "../models/proveedor.model.js";

export const getProveedores = async (req, res) => {
  const data = await Proveedor.find();
  res.json(data);
};

export const createProveedor = async (req, res) => {
  const nuevo = new Proveedor(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};