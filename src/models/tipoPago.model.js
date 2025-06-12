// src/models/tipoPago.model.js
import mongoose from "mongoose";

const tipoPagoSchema = new mongoose.Schema({
  metodo_pago: String,
  estado: String,
}, { timestamps: true });

export default mongoose.model("TipoPago", tipoPagoSchema);