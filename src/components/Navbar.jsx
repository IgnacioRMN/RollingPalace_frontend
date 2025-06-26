import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../assets/logo.png";
import "../styles/Navbar-Footer.css";
import "../styles/Botones.css";

const Navbar = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();

  const handleCerrarSesion = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      localStorage.removeItem("token");
      setUsuarioLogueado(null);
      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        text: "Cerraste sesión correctamente",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-beige shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold text-black" to="/">
          <img src={Logo} alt="Logo" style={{ height: 50, width: "auto" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-black">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalogo" className="nav-link text-black">
                Catálogo
              </NavLink>
            </li>

            {/* Mostrar Admin Panel solo si es admin */}
            {usuarioLogueado && localStorage.getItem("isAdmin") === "true" && (
              <li className="nav-item">
                <NavLink to="/panel-admin" className="nav-link text-black">
                  Admin Panel
                </NavLink>
              </li>
            )}

            {/* Mostrar "Mis Reservas" solo si está logueado y NO es admin */}
            {usuarioLogueado && localStorage.getItem("isAdmin") !== "true" && (
              <li className="nav-item">
                <NavLink to="/mis-reservas" className="nav-link text-black">
                  Mis Reservas
                </NavLink>
              </li>
            )}

            {usuarioLogueado ? (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-dark-elegant"
                  onClick={handleCerrarSesion}
                >
                  Cerrar Sesión
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="btn btn-outline-dark-elegant">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/registro" className="btn btn-dark-elegant">
                    Registrarse
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
