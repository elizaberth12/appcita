//src/models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  { 
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ['cliente', 'empleado', 'admin'],
      default: 'cliente',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
