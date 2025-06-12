import DetalleEmpleado from "../models/detalleEmpleado.model.js";

// Obtener todos los detalles de empleados
export const getDetallesEmpleado = async (req, res) => {
  try {
    const detalles = await DetalleEmpleado.find()
      .populate("descanso")
      .populate("empleado");
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener detalles", error });
  }
};

// Crear nuevo detalle de empleado
export const createDetalleEmpleado = async (req, res) => {
  try {
    const nuevoDetalle = new DetalleEmpleado(req.body);
    const detalleGuardado = await nuevoDetalle.save();
    res.status(201).json(detalleGuardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear detalle", error });
  }
};

// Actualizar un detalle de empleado por ID
export const updateDetalleEmpleado = async (req, res) => {
  try {
    const detalleActualizado = await DetalleEmpleado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!detalleActualizado) {
      return res.status(404).json({ message: "Detalle no encontrado" });
    }
    res.json(detalleActualizado);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar", error });
  }
};

// Eliminar un detalle de empleado por ID
export const deleteDetalleEmpleado = async (req, res) => {
  try {
    const eliminado = await DetalleEmpleado.findByIdAndDelete(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ message: "Detalle no encontrado" });
    }
    res.json({ message: "Detalle eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar", error });
  }
};
