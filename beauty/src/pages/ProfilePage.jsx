import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Css/PerfilPage.css";
import avatarMujer from "../assets/perfil/avatarMujer.jpeg";
import imagenPer from "../assets/perfil/imagenPer.jpeg";

function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <img src={avatarMujer} alt="Avatar" className="avatar" />

        <div className="profile-buttons">
          <button onClick={() => alert("No hay notificaciones")} className="profile-btn">
            Notificaciones
          </button>
          <button onClick={() => navigate("/CategoryServi")} className="profile-btn">
            Agendar cita
          </button>
          <button onClick={() => navigate("/historial-citas")} className="profile-btn">
            Historial
          </button>
        </div>

        <img src={imagenPer} alt="Decoración" className="decor-img" />
      </div>
 
      <div className="profile-content">
        <h1>Perfil</h1>
        <div className="user-info">
          <p><strong>Nombre:</strong> {user?.nombre || "No disponible"}</p>
          <p><strong>Email:</strong> {user?.email || "No disponible"}</p>
          {/* Puedes agregar más datos si están disponibles en `user` */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
