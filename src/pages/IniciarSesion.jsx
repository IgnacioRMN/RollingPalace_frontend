import { useForm } from "react-hook-form";
import { login } from "../helpers/api.js";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      const user = await login(usuario);
      if (user && user.token) {
        localStorage.setItem("token", user.token);
        setUsuarioLogueado(usuario.email);
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1500,
        });
        navegacion("/admin");
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
    <div className="container py-5 text-center">
      <h2>Iniciar Sesión</h2>
      {/* Aca va el form completo si querés agregarlo */}
    </div>
  );
};

export default Login;

