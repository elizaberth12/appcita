import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Css/RegisterPage.css";

function RegisterPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerError, setErrors } = useAuth();
  const navigate = useNavigate();

  const password = watch("password");
 
  useEffect(() => {
    if (isAuthenticated) navigate("/perfil");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    const success = await signup(values);
    if (!success) {
      // Manejar errores si lo deseas
    }
  });
//
  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]);

  return (
    <div className="register-container">
      <h1 className="register-title">Crea tu cuenta</h1>

      {registerError.length > 0 && (
        <div className="error-message">
          {registerError.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      )}

      <form className="register-form" onSubmit={onSubmit}>
        <input
          type="text"
          {...register("nombre", { required: true })}
          placeholder="Ingrese su nombre"
        />
        {errors.nombre && <p className="error-message">Nombre requerido</p>}

        <input
          type="text"
          {...register("apellido", { required: true })}
          placeholder="Ingrese su apellido"
        />
        {errors.apellido && <p className="error-message">Apellido requerido</p>}

        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.username && <p className="error-message">Usuario requerido</p>}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo electrónico"
        />
        {errors.email && <p className="error-message">Email requerido</p>}

        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Contraseña"
        />
        {errors.password && (
          <p className="error-message">Mínimo 6 caracteres</p>
        )}

        <input
          type="password"
          {...register("confirmarPassword", {
            required: true,
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
          placeholder="Confirmar contraseña"
        />
        {errors.confirmarPassword && (
          <p className="error-message">{errors.confirmarPassword.message}</p>
        )}

        <button type="submit" className="register-btn">
          Sign Up
        </button>
      </form>

      <div className="login-link">
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
