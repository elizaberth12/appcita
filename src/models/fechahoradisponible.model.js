// src/models/fechahoradisponible.model.js
import mongoose from "mongoose";

const fechaHoraDisponibleSchema = new mongoose.Schema({
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  sucursal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sucursal",
    required: true,
  }, 
  fecha: {
    type: Date,
    required: true,
  },
  horaInicio: {
    type: String, // Ej: "09:00"
    required: true,
  },
  horaFin: {
    type: String, // Ej: "17:00"
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("FechaHoraDisponible", fechaHoraDisponibleSchema);
