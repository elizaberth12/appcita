// src/models/paqueteFavorito.model.js 
import mongoose from "mongoose";

const paqueteFavoritoSchema = new mongoose.Schema({
  cliente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Cliente", 
    required: true 
  },
  nombre: { type: String, required: true },
  servicios: [{
    servicio: { type: mongoose.Schema.Types.ObjectId, ref: "Servicio" },
    cantidad: { type: Number, default: 1 }
  }],
  descuento: { type: Number, min: 0, max: 50 }, // % de descuento
  fechaCreacion: { type: Date, default: Date.now },
  vecesUtilizado: { type: Number, default: 0 }
}, { timestamps: true });

// Método para calcular precio total
paqueteFavoritoSchema.methods.calcularTotal = async function() {
  const Servicio = mongoose.model("Servicio");
  let total = 0;
  for (const item of this.servicios) {
    const servicio = await Servicio.findById(item.servicio);
    total += servicio.precioBase * item.cantidad;
  }
  return total - (total * (this.descuento / 100));
};

export default mongoose.model("PaqueteFavorito", paqueteFavoritoSchema);