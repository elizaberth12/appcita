// components/SeleccionEmpleado.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const especialidades = ['estilista', 'peluquero', 'manicurista', 'maquillador'];

function SeleccionEmpleado({ onEmpleadoSeleccionado }) {
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState('');
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    if (especialidadSeleccionada) {
      axios
        .get(`http://localhost:3000/api/empleados/especialidad/${especialidadSeleccionada}`)
        .then((res) => setEmpleados(res.data))
        .catch((err) => console.error(err));
    }
  }, [especialidadSeleccionada]);

  return (
    <div>
      <label>Selecciona una especialidad:</label>
      <select value={especialidadSeleccionada} onChange={(e) => setEspecialidadSeleccionada(e.target.value)}>
        <option value="">-- Selecciona --</option>
        {especialidades.map((esp) => (
          <option key={esp} value={esp}>
            {esp.charAt(0).toUpperCase() + esp.slice(1)}
          </option>
        ))}
      </select>

      {empleados.length > 0 && (
        <div>
          <label>Selecciona un empleado:</label>
          <select onChange={(e) => onEmpleadoSeleccionado(e.target.value)}>
            <option value="">-- Selecciona --</option>
            {empleados.map((emp) => (
              <option key={emp._id} value={emp._id}>
                {emp.usuario.nombre} {emp.usuario.apellido}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default SeleccionEmpleado;
