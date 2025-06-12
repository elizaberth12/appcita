import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { obtenerHorariosDisponibles } from "../api/disponibilidad";

function EditarCitaPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cita, setCita] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", fechaHora: "" });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/citas/${id}`);
      setCita(res.data);
      setForm({
        title: res.data.title,
        description: res.data.description || "",
        fechaHora: res.data.fechaHora || "",
      });

      const horariosDisponibles = await obtenerHorariosDisponibles({ sucursal: "ID_SUCURSAL" });
      setHorarios(horariosDisponibles);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/citas/${id}`, form);
    alert("Cita actualizada correctamente");
    navigate("/citas");
  };

  if (!cita) return <p>Cargando...</p>;

  const esPasada = new Date(cita.date) < new Date();

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Editar Cita</h2>

      {esPasada ? (
        <p className="text-red-500">No puedes editar una cita pasada.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1">Título</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Descripción</label>
            <textarea name="description" value={form.description} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Horario disponible</label>
            <select name="fechaHora" value={form.fechaHora} onChange={handleChange} required>
              <option value="">Selecciona un horario</option>
              {horarios.map((h) => (
                <option key={h._id} value={h._id}>
                  {new Date(h.fecha).toLocaleDateString()} - {h.horaInicio} a {h.horaFin}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Guardar Cambios</button>
        </form>
      )}
    </div>
  );
}

export default EditarCitaPage;
