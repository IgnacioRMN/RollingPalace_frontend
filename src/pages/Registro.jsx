import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { registrarUsuario } from "../helpers/api";
import "../styles/Botones.css";

const Registro = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registrarUsuario(data);
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada correctamente",
      });
      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.mensaje || "Error al registrar usuario",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Registrarse</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
              placeholder="Nombre Completo"
              {...register("nombre", {
                required: "El nombre de usuario es obligatorio",
              })}
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="ejemplo@gmail.com"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
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
              {...register("contraseña", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
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
            {isSubmitting ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
