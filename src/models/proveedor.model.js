// src/models/proveedor.model.js 
import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  contacto: {
    email: { type: String, lowercase: true },
    telefono: String,
    representante: String
  },
  direccion: {
    calle: String,
    ciudad: String,
    pais: String
  },
  tipoProductos: [{ type: String }],
  evaluacion: {
    rating: { type: Number, min: 1, max: 5 },
    tiempoEntrega: Number // Días promedio
  },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Proveedor", proveedorSchema);