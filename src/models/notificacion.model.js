// src/models/notificacion.model.js 
import mongoose from "mongoose";

const notificacionSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tipo: { 
    type: String, 
    required: true,
    enum: ["cita", "pago", "sistema", "promocion"] 
  },
  titulo: { type: String, required: true },
  mensaje: { type: String, required: true },
  leida: { type: Boolean, default: false },
  fechaEnvio: { type: Date, default: Date.now },
  metadata: mongoose.Schema.Types.Mixed // Datos adicionales (ej: ID de cita)
}, { timestamps: true });

export default mongoose.model("Notificacion", notificacionSchema);