import Descanso from "../models/descanso.model.js";

export const crearDescanso = async (req, res) => {
  try {
    const descanso = new Descanso(req.body);
    await descanso.save();
    res.status(201).json(descanso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerDescansos = async (req, res) => {
  try {
    const descansos = await Descanso.find().populate("empleado");
    res.json(descansos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarDescanso = async (req, res) => {
  try {
    const descanso = await Descanso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(descanso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarDescanso = async (req, res) => {
  try {
    await Descanso.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Descanso eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
