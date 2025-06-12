//beauty/src/pages/Login.jsx
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Css/LoginPage.css"; // Usa los mismos estilos
 
function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: loginErrors, isAuthenticated, setErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/perfil");
  }, [isAuthenticated, navigate]);

  // Limpiar errores al desmontar el componente
  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]);

  const onSubmit = handleSubmit(async (data) => {
    await signin(data);
  });

  return (
    <div className="login-container">
      <h1 className="login-title">Iniciar sesión</h1>

      {loginErrors.length > 0 && (
        <div className="error-message">
          {loginErrors.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      )}

      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo electrónico"
        />
        {errors.email && <p className="error-message">Email es requerido</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />
        {errors.password && (
          <p className="error-message">Contraseña es requerida</p>
        )}

        <button type="submit" className="login-btn">Ingresar</button>
      </form>

      <div className="register-link">
        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
      </div>
    </div>
  );
}

export default LoginPage;
