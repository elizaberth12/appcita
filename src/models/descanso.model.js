// src/models/descanso.model.js
import mongoose from "mongoose";

const descansoSchema = new mongoose.Schema({
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  dia_semana: String,
}, { timestamps: true });

export default mongoose.model("Descanso", descansoSchema);