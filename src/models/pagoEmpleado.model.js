// src/models/pagoEmpleado.model.js
import mongoose from "mongoose";

const pagoEmpleadoSchema = new mongoose.Schema({
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  total_trabajado: Number,
  ganancia_final: Number,
}, { timestamps: true });

export default mongoose.model("PagoEmpleado", pagoEmpleadoSchema);