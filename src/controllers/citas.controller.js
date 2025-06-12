import Cita from "../models/cita.model.js";
import FechaHoraDisponible from "../models/fechahoradisponible.model.js";

export const createCita = async (req, res) => {
  try {
    const { title, description, fechaHora } = req.body;

    // Verifica si el horario está disponible
    const disponibilidad = await FechaHoraDisponible.findById(fechaHora);
    if (!disponibilidad || !disponibilidad.disponible) {
      return res.status(400).json({ message: "Horario no disponible" });
    }

    // Marca el horario como no disponible
    disponibilidad.disponible = false;
    await disponibilidad.save();

    // Crea la cita
    const nuevaCita = new Cita({
      title,
      description,
      fechaHora,
      user: req.user.id,
    });

    await nuevaCita.save();
    res.status(201).json(nuevaCita);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCitas = async (req, res) => {
  try {
    const citas = await Cita.find({ cliente: req.user.id })
      .populate("cliente", "nombre email")
      .populate("empleado", "nombre especialidad")
      .populate("servicio", "nombre duracion")
      .populate("sucursal", "nombre direccion");

    res.json(citas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCita = async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
    return res.json(cita);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCita = async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });

    // Verificar si la cita ya ocurrió
    if (new Date(cita.date) < new Date()) {
      return res.status(400).json({ message: "No puedes editar una cita pasada." });
    }

    const { title, description, fechaHora } = req.body;

    cita.title = title;
    cita.description = description;
    if (fechaHora) {
      cita.date = fechaHora;
    }

    await cita.save();
    res.json(cita);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteCita = async (req, res) => {
  try {
    const deletedCita = await Cita.findByIdAndDelete(req.params.id);
    if (!deletedCita)
      return res.status(404).json({ message: "Cita no encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
