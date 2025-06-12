// src/schemas/fechahoradisponible.schema.js
import { z } from "zod";

export const createDisponibilidadSchema = z.object({
  empleado: z.string(),
  sucursal: z.string(),
  fecha: z.string(), // formato ISO
  horaInicio: z.string(),
  horaFin: z.string(),
  disponible: z.boolean().optional(),
});
