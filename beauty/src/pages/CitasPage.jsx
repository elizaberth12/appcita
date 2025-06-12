// src/pages/CitasPage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import "../Css/CitasPage.css";

function CitasPage() {
  const [citas, setCitas] = useState([]);
  const [estadoFiltro, setEstadoFiltro] = useState("todas");
  const [paginaActual, setPaginaActual] = useState(1);
  const [modalCita, setModalCita] = useState(null);
  const citasPorPagina = 4;

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const res = await axios.get("/citas");
        setCitas(res.data);
      } catch (error) {
        console.error("Error al cargar las citas:", error);
      }
    };
    fetchCitas();
  }, []);

  const citasFiltradas = citas.filter((cita) => {
    if (estadoFiltro === "todas") return true;
    return (cita.estado || "pendiente").toLowerCase() === estadoFiltro;
  });

  const totalPaginas = Math.ceil(citasFiltradas.length / citasPorPagina);
  const indexInicio = (paginaActual - 1) * citasPorPagina;
  const citasPaginadas = citasFiltradas.slice(indexInicio, indexInicio + citasPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  const cancelarCita = async (id) => {
    try {
      await axios.put(`/citas/${id}/cancelar`);
      setCitas((prev) =>
        prev.map((cita) => (cita._id === id ? { ...cita, estado: "cancelada" } : cita))
      );
    } catch (error) {
      alert("Error al cancelar la cita.");
    }
  };

  return (
    <div className="citas-container">
      <div className="citas-header">
        <h2 className="citas-title">Historial de Citas</h2>
        <Link to="/nueva-cita" className="nueva-cita-btn">+ Nueva Cita</Link>
      </div>

      <div className="filtro-estado">
        <label>Filtrar por estado:</label>
        <select value={estadoFiltro} onChange={(e) => setEstadoFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="pendiente">Pendiente</option>
          <option value="confirmada">Confirmada</option>
          <option value="cancelada">Cancelada</option>
          <option value="completada">Completada</option>
        </select>
      </div>

      {citasPaginadas.length === 0 ? (
        <p className="mensaje-vacio">No hay citas para este estado.</p>
      ) : (
        <ul className="citas-list">
          {citasPaginadas.map((cita) => (
            <li key={cita._id} className="cita-card">
              <h3 className="cita-title">{cita.title}</h3>
              <p className="cita-date">
                Fecha: {new Date(cita.date).toLocaleDateString()} - {new Date(cita.date).toLocaleTimeString()}
              </p>
              <p className="cita-description">{cita.description}</p>
              <span className="cita-status">
                Estado: {cita.estado ? cita.estado.charAt(0).toUpperCase() + cita.estado.slice(1) : "Pendiente"}
              </span>

              <div className="cita-actions">
                <button className="ver-btn" onClick={() => setModalCita(cita)}>Ver Detalles</button>
                {cita.estado !== "cancelada" && cita.estado !== "completada" && (
                  <button className="cancelar-btn" onClick={() => cancelarCita(cita._id)}>Cancelar</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {totalPaginas > 1 && (
        <div className="paginacion">
          <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
            ← Anterior
          </button>
          <span>Página {paginaActual} de {totalPaginas}</span>
          <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
            Siguiente →
          </button>
        </div>
      )}

      {/* Modal de Detalles */}
      {modalCita && (
        <div className="modal-overlay" onClick={() => setModalCita(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Detalles de la Cita</h3>
            <p><strong>Título:</strong> {modalCita.title}</p>
            <p><strong>Descripción:</strong> {modalCita.description}</p>
            <p><strong>Fecha:</strong> {new Date(modalCita.date).toLocaleString()}</p>
            <p><strong>Estado:</strong> {modalCita.estado}</p>
            {modalCita.servicio && <p><strong>Servicio:</strong> {modalCita.servicio.nombre}</p>}
            {modalCita.empleado && <p><strong>Empleado:</strong> {modalCita.empleado.nombre}</p>}
            <button onClick={() => setModalCita(null)} className="cerrar-modal">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CitasPage;
