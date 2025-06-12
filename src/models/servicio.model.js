// src/models/servicio.model.js 
import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true,
    unique: true 
  },
  categoria: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "CategoriaServicio", 
    required: true 
  },
  descripcion: { type: String, maxlength: 500 },
  duracion: { type: Number, required: true, min: 15 }, // Minutos
  precioBase: { type: Number, required: true, min: 0 },
  imagen: { type: String }, // URL de la imagen
  activo: { type: Boolean, default: true },
  requiereEquipamiento: [{ type: String }] // Ej: ["tijeras", "maquina"]
}, { timestamps: true });

export default mongoose.model("Servicio", servicioSchema);