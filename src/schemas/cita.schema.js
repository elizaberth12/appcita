// src/schemas/cita.schema.js
import { z } from "zod";

export const createCitaSchema = z.object({
  cliente: z.string().min(1, "Cliente requerido"),
  empleado: z.string().min(1, "Empleado requerido"),
  servicio: z.string().min(1, "Servicio requerido"),
  sucursal: z.string().min(1, "Sucursal requerida"),
  fechaHora: z.string().datetime("Fecha y hora inválida"),
  estado: z.enum(["pendiente", "confirmada", "cancelada", "completada"]).optional(),
  notas: z.string().optional(),
});
