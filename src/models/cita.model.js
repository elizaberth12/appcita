// src/models/cita.model.js 
import mongoose from "mongoose";

const citaSchema = new mongoose.Schema({
  cliente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Cliente", 
    required: true 
  },
  empleado: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Empleado", 
    required: true 
  },
  servicio: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Servicio", 
    required: true 
  },
  fechaHora: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        return value > new Date(); // No permitir citas en el pasado
      },
      message: "La fecha/hora debe ser futura"
    }
  },
  duracion: { type: Number, min: 15, max: 240 }, // En minutos
  estado: { 
    type: String, 
    enum: ["pendiente", "confirmada", "en_progreso", "completada", "cancelada"],
    default: "pendiente" 
  },
  notas: String,
  pagado: { type: Boolean, default: false },
  metodoPago: { 
    type: String, 
    enum: ["efectivo", "tarjeta", "transferencia", null],
    default: null 
  }
}, { timestamps: true });

// Índice para búsquedas rápidas
citaSchema.index({ cliente: 1, estado: 1 });
citaSchema.index({ empleado: 1, fechaHora: 1 }, { unique: true });

export default mongoose.model("Cita", citaSchema);