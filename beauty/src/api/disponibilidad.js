//beauty/src/api/disponibilidad.js
import axios from "../api/axios";

export const obtenerHorariosDisponibles = async (filtros) => {
  const params = new URLSearchParams(filtros).toString();
  const res = await axios.get(`/disponibilidad?${params}`);
  return res.data;
};
