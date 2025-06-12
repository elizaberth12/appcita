// src/models/detalleCita.model.js
import mongoose from "mongoose";

const detalleCitaSchema = new mongoose.Schema({
  horario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FechaHoraDisponible",
    required: true,
  },
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servicio",
    required: true,
  },
  tipo_pago: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TipoPago",
    required: true,
  },
  precio_final: Number,
}, { timestamps: true });

export default mongoose.model("DetalleCita", detalleCitaSchema);