// src/models/cliente.model.js 
import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  usuario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true,
    immutable: true // Evita cambios después de creado
  },
  preferencias: {
    tipoServicio: [{ type: mongoose.Schema.Types.ObjectId, ref: "Servicio" }],
    notificaciones: { type: Boolean, default: true }
  },
  historialCitas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cita" }],
  puntosFidelidad: { type: Number, default: 0, min: 0 }
}, { timestamps: true });

export default mongoose.model("Cliente", clienteSchema);