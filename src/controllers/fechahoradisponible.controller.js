// src/controllers/fecha_hora_disponible.controller.js
import FechaHoraDisponible from "../models/fechahoradisponible.model.js";

export const crearDisponibilidad = async (req, res) => {
  try {
    const nuevaDisponibilidad = new FechaHoraDisponible(req.body);
    await nuevaDisponibilidad.save();
    res.status(201).json(nuevaDisponibilidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerDisponibilidades = async (req, res) => {
  try {
    const { sucursal, empleado, fecha } = req.query;
    const filtro = {};
    if (sucursal) filtro.sucursal = sucursal;
    if (empleado) filtro.empleado = empleado;
    if (fecha) filtro.fecha = fecha;

    const disponibilidad = await FechaHoraDisponible.find(filtro)
      .populate("empleado", "nombre especialidad")
      .populate("sucursal", "nombre");

    res.json(disponibilidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
