// src/models/inventario.model.js
import mongoose from "mongoose";

const inventarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { 
    type: String,
    enum: ["herramientas", "productos", "consumibles", "equipos"],
    required: true 
  },
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" },
  precioCompra: { type: Number, required: true, min: 0 },
  precioVenta: { type: Number, min: 0 },
  stock: { 
    type: Number, 
    required: true, 
    min: 0,
    validate: {
      validator: function(value) {
        return value >= this.stockMinimo;
      },
      message: "Stock no puede ser menor al mínimo"
    } 
  },
  stockMinimo: { type: Number, default: 5 },
  unidad: { type: String, enum: ["unidades", "litros", "kg", "metros"], default: "unidades" },
  ubicacion: String // Ej: "Estante A2"
}, { timestamps: true });

// Middleware para alertar bajo stock
inventarioSchema.post("save", function(doc) {
  if (doc.stock < doc.stockMinimo) {
    console.log(`⚠️ Alerta: Stock bajo para ${doc.nombre} (${doc.stock} restantes)`);
    // Aquí podrías integrar un sistema de notificaciones
  }
});

export default mongoose.model("Inventario", inventarioSchema);