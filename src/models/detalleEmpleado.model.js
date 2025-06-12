// src/models/detalleEmpleado.model.js
import mongoose from "mongoose";

const detalleEmpleadoSchema = new mongoose.Schema({
  descanso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Descanso",
  },
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  num_telefono: Number,
  fecha_contrato: Date,
  ganancia_final: Number,
}, { timestamps: true });

export default mongoose.model("DetalleEmpleado", detalleEmpleadoSchema);