// src/models/sucursal.model.js 
import mongoose from "mongoose";

const horarioSchema = new mongoose.Schema({
  dia: { 
    type: String, 
    enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    required: true 
  },
  apertura: { type: String, required: true }, // "HH:MM"
  cierre: { type: String, required: true },
  activo: { type: Boolean, default: true }
});

const sucursalSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  direccion: {
    calle: { type: String, required: true },
    ciudad: { type: String, required: true },
    codigoPostal: String,
    coordenadas: { lat: Number, lng: Number }
  },
  telefono: { type: String, required: true },
  horarios: [horarioSchema],
  empleados: [{ type: mongoose.Schema.Types.ObjectId, ref: "Empleado" }],
  activa: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Sucursal", sucursalSchema);