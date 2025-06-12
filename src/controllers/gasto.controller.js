import Gasto from "../models/gasto.model.js";

export const getGastos = async (req, res) => {
  const gastos = await Gasto.find().populate(["proveedor", "sucursal"]);
  res.json(gastos);
};

export const createGasto = async (req, res) => {
  const nuevo = new Gasto(req.body);
  const guardado = await nuevo.save();
  res.status(201).json(guardado);
};

export const updateGasto = async (req, res) => {
  const actualizado = await Gasto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
};

export const deleteGasto = async (req, res) => {
  await Gasto.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
