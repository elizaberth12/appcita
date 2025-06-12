import '../Css/HomePage.css';
import { useNavigate } from 'react-router-dom';
import leftImage from '../assets/home/left-beauty.jpeg';   // Imagen lado izquierdo
import rightImage from '../assets/home/right-bg.jpeg';     // Imagen fondo derecho

function HomePage() {
  const navigate = useNavigate();

  const handleRedirect = () => navigate('/login');

  return (
    <div className="home-container">
      {/* Lado izquierdo con imagen o contenido */}
      <div className="home-left">
        <img src={leftImage} alt="Modelo belleza" className="home-left-image" />
        <div className="home-text">
          <h1 className="home-title">Beauty Agenda</h1>
          <p className="home-slogan">Donde la belleza y el tiempo se encuentran.</p>
          <button className="home-button" onClick={handleRedirect}>Agenda tu cita</button>
        </div>
      </div>

      {/* Fondo derecho como imagen */}
      <div
        className="home-right"
        style={{ backgroundImage: `url(${rightImage})` }}
      ></div>
    </div>
  );
}

export default HomePage;
