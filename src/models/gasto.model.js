// src/models/gasto.model.js 
import mongoose from "mongoose";

const gastoSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true, min: 0 },
  categoria: {
    type: String,
    required: true,
    enum: ["nómina", "alquiler", "servicios", "suministros", "mantenimiento", "otros"]
  },
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" },
  fecha: { type: Date, default: Date.now },
  comprobante: String, // URL del archivo
  pagado: { type: Boolean, default: false },
  metodoPago: { 
    type: String, 
    enum: ["efectivo", "transferencia", "cheque", "tarjeta"] 
  },
  sucursal: { type: mongoose.Schema.Types.ObjectId, ref: "Sucursal" }
}, { timestamps: true });

export default mongoose.model("Gasto", gastoSchema);