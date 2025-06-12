// src/models/categoriaServicio.model.js 
import mongoose from "mongoose";

const categoriaServicioSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true,
    unique: true 
  },
  descripcion: String,
  imagen: { type: String }, // URL o referencia a Imagen
  servicios: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Servicio" 
  }],
  comisionEmpleado: { type: Number, default: 0.3 } // 30% por defecto
}, { timestamps: true });

export default mongoose.model("CategoriaServicio", categoriaServicioSchema);