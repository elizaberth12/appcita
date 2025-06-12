//src/controllers/paqueteFavorito.controller.js
import PaqueteFavorito from "../models/paqueteFavorito.model.js";

export const getPaquetesFavoritos = async (req, res) => {
  const data = await PaqueteFavorito.find().populate("cliente servicios.servicio");
  res.json(data);
};

export const createPaqueteFavorito = async (req, res) => {
  const nuevo = new PaqueteFavorito(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};