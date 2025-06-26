import { useForm } from "react-hook-form";
import { iniciarSesion } from "../helpers/api.js";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "../styles/Botones.css";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      const user = await iniciarSesion(usuario);
      if (user && user.token) {
        localStorage.setItem("token", user.token);
        setUsuarioLogueado(usuario.email);
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1500,
        });
        navegacion("/panel-admin");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Email o contraseña incorrecta",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al iniciar sesión: " + error.message,
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="ejemplo@gmail.com"
              {...register("email", {
                required: "El email es obligatorio",
                minLength: {
                  value: 11,
                  message: "Debe ingresar como mínimo 11 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como máximo 50 caracteres",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${
                errors.contraseña ? "is-invalid" : ""
              }`}
              placeholder="Ejemplo123"
              {...register("contraseña", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "Debe ingresar como mínimo 8 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Debe ingresar como máximo 20 caracteres",
                },
              })}
            />
            {errors.contraseña && (
              <div className="invalid-feedback">
                {errors.contraseña.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-dark-elegant w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
