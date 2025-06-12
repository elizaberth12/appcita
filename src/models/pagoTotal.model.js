// src/models/pagoTotal.model.js
import mongoose from "mongoose";

const pagoTotalSchema = new mongoose.Schema({
  factura: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Factura",
    required: true,
  },
  pago_final: Number,
  fecha_pago: Date,
}, { timestamps: true });

export default mongoose.model("PagoTotal", pagoTotalSchema);