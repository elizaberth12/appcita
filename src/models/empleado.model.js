// src/models/empleado.model.js (Mejorado)
import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema({
  usuario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true,
    immutable: true 
  },
  sucursal: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Sucursal", 
    required: true 
  },
  especialidad: { 
    type: String, 
    required: true,
    enum: ["barberia", "estetica", "masajes", "tatuajes"] 
  },
  horarioTrabajo: {
    dias: [{ type: String, enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"] }],
    horasPorSemana: { type: Number, min: 10, max: 48 }
  },
  salarioPorHora: { type: Number, min: 0 },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

// Middleware para limpiar citas al eliminar empleado
empleadoSchema.pre("remove", async function(next) {
  await mongoose.model("Cita").deleteMany({ empleado: this._id });
  next();
});

export default mongoose.model("Empleado", empleadoSchema);