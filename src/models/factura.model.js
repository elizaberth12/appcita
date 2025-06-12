// src/models/factura.model.js 
import mongoose from "mongoose";

const facturaSchema = new mongoose.Schema({
  numero: { type: String, required: true, unique: true }, // "FAC-0001"
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true },
  items: [{
    descripcion: String,
    cantidad: { type: Number, min: 1 },
    precioUnitario: { type: Number, min: 0 },
    subtotal: { type: Number, min: 0 }
  }],
  subtotal: { type: Number, required: true, min: 0 },
  impuestos: { type: Number, default: 0 },
  total: { type: Number, required: true, min: 0 },
  fechaEmision: { type: Date, default: Date.now },
  estado: { type: String, enum: ["pendiente", "pagada", "cancelada"], default: "pendiente" },
  pdfUrl: String // URL del PDF generado
}, { timestamps: true });

// Middleware para calcular total antes de guardar
facturaSchema.pre("save", function(next) {
  this.total = this.subtotal + this.impuestos;
  next();
});

export default mongoose.model("Factura", facturaSchema);