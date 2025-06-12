import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SeleccionHorario from "../context/SeleccionHorario";
import axios from "../api/axios";
import "../Css/NuevaCita.css"; // Asegúrate de importar tu CSS

function NuevaCitaPage() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [selectedHorarioId, setSelectedHorarioId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedHorarioId) return alert("Selecciona un horario");

    try {
      await axios.post("/citas", {
        title,
        description,
        fechaHora: selectedHorarioId,
      });

      alert("¡Cita registrada exitosamente!");
    } catch (err) {
      console.error("Error al registrar cita:", err);
      alert("Hubo un error al registrar la cita");
    }
  };

  return (
    <div className="nueva-cita-container">
      <form onSubmit={handleSubmit} className="nueva-cita-form">
        <h2 className="form-title">Agendar Nueva Cita</h2>

        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Selecciona una fecha</label>
          <DatePicker
            selected={fechaSeleccionada}
            onChange={(date) => setFechaSeleccionada(date)}
            className="datepicker-input"
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <div className="form-group">
          <SeleccionHorario
            onSeleccionarHorario={setSelectedHorarioId}
            fechaSeleccionada={fechaSeleccionada}
          />
        </div>

        <button type="submit" className="add-cita-btn">
          Agendar Cita
        </button>
      </form>
    </div>
  );
}

export default NuevaCitaPage;
