//src/controllers/notificacion.controller.js
import Notificacion from "../models/notificacion.model.js";

export const getNotificaciones = async (req, res) => {
  const data = await Notificacion.find().populate("usuario");
  res.json(data);
};

export const createNotificacion = async (req, res) => {
  const nueva = new Notificacion(req.body);
  await nueva.save();
  res.status(201).json(nueva);
};

export const marcarComoLeida = async (req, res) => {
  const actualizada = await Notificacion.findByIdAndUpdate(req.params.id, { leida: true }, { new: true });
  res.json(actualizada);
};
