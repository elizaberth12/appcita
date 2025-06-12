import Sucursal from "../models/sucursal.model.js";

export const crearSucursal = async (req, res) => {
  try {
    const sucursal = new Sucursal(req.body);
    await sucursal.save();
    res.status(201).json(sucursal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerSucursales = async (req, res) => {
  try {
    const sucursales = await Sucursal.find().populate("empleados");
    res.json(sucursales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarSucursal = async (req, res) => {
  try {
    const sucursal = await Sucursal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(sucursal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarSucursal = async (req, res) => {
  try {
    await Sucursal.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Sucursal eliminada" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
