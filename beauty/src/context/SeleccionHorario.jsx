// src/contex/SeleccionHorario.jsx
import { useEffect, useState } from "react";
import axios from "../api/axios";

function SeleccionHorario({ fechaSeleccionada, onSeleccionarHorario }) {
  const [horarios, setHorarios] = useState([]);
  const [horariosFiltrados, setHorariosFiltrados] = useState([]);
  const [selectedHorarioId, setSelectedHorarioId] = useState("");
  const [cargando, setCargando] = useState(true);

  // Obtener horarios disponibles
  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        setCargando(true);
        const res = await axios.get("/horarios-disponibles");
        setHorarios(res.data);
      } catch (error) {
        console.error("Error al cargar horarios disponibles", error);
      } finally {
        setCargando(false);
      }
    };
    fetchHorarios();
  }, []);

  // Filtrar por fecha seleccionada
  useEffect(() => {
    if (!fechaSeleccionada) return;

    const fechaISO = fechaSeleccionada.toISOString().split("T")[0];
    const filtrados = horarios.filter((h) => {
      const fechaHorario = h.fecha.split("T")[0];
      return fechaHorario === fechaISO && h.disponible;
    });

    setHorariosFiltrados(filtrados);
    setSelectedHorarioId("");
    onSeleccionarHorario("");
  }, [fechaSeleccionada, horarios]);

  const handleHorarioChange = (e) => {
    const horarioId = e.target.value;
    setSelectedHorarioId(horarioId);
    onSeleccionarHorario(horarioId);
  };

  return (
    <div className="seleccion-horario">
      <label className="block text-sm font-medium text-gray-700 mb-1">Horarios disponibles</label>

      {cargando ? (
        <div className="text-sm text-gray-500 animate-pulse">Cargando horarios...</div>
      ) : horariosFiltrados.length === 0 ? (
        <div className="text-sm text-red-500 mt-2 transition-opacity duration-300">
          No hay horarios disponibles para esta fecha.
        </div>
      ) : (
        <select
          className="w-full border px-3 py-2 rounded transition-all"
          value={selectedHorarioId}
          onChange={handleHorarioChange}
          required
        >
          <option value="">-- Selecciona un horario --</option>
          {horariosFiltrados.map((h) => (
            <option key={h._id} value={h._id}>
              {h.horaInicio} - {h.horaFin} ({h.empleado?.nombre})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SeleccionHorario;
