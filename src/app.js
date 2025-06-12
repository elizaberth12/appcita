//src/app.js
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

// Rutas importadas
import authRoutes from "./routes/auth.routes.js";
import citasRoutes from "./routes/citas.routes.js";
import descansoRoutes from "./routes/descanso.routes.js";
import categoriaServicioRoutes from "./routes/categoriaServicio.routes.js";
import servicioRoutes from "./routes/servicio.routes.js";
import sucursalRoutes from "./routes/sucursal.routes.js";
import inventarioRoutes from "./routes/inventario.routes.js";
import notificacionRoutes from "./routes/notificacion.routes.js";
import pagoEmpleadoRoutes from "./routes/pagoEmpleado.routes.js";
import pagoTotalRoutes from "./routes/pagoTotal.routes.js";
import paqueteFavoritoRoutes from "./routes/paqueteFavorito.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import tipoPagoRoutes from "./routes/tipoPago.routes.js";
import detalleCitaRoutes from "./routes/detalleCita.routes.js";
import detalleEmpleadoRoutes from "./routes/detalleEmpleado.routes.js";
import facturaRoutes from "./routes/factura.routes.js";
import gastoRoutes from "./routes/gasto.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Registrar rutas
app.use("/api/auth", authRoutes);
app.use("/api", citasRoutes);
app.use("/api/descansos", descansoRoutes);
app.use("/api/categorias", categoriaServicioRoutes);
app.use("/api/servicios", servicioRoutes);
app.use("/api/sucursales", sucursalRoutes);
app.use("/api/inventarios", inventarioRoutes);
app.use("/api/notificaciones", notificacionRoutes);
app.use("/api/pagos-empleado", pagoEmpleadoRoutes);
app.use("/api/pagos-totales", pagoTotalRoutes);
app.use("/api/paquetes-favoritos", paqueteFavoritoRoutes);
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/tipos-pago", tipoPagoRoutes);
app.use("/api/detalle-cita", detalleCitaRoutes);
app.use("/api/detalle-empleado", detalleEmpleadoRoutes);
app.use("/api/facturas", facturaRoutes);
app.use("/api/gastos", gastoRoutes);
export default app;
