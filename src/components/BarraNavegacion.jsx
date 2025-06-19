import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BarraNavegacion = ({ usuarioLogueado, setUsuarioLogueado }) => {
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Rolling Palace
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalogo" className="nav-link">
                Catálogo
              </NavLink>
            </li>
            {usuarioLogueado ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={handleCerrarSesion}
                >
                  Cerrar Sesión
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/iniciar-sesion" className="nav-link">
                    Iniciar Sesión
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/registrarse" className="nav-link">
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

export default BarraNavegacion;
