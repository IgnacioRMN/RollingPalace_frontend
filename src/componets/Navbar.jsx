import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow beige">
      <div className="container">
        <Link className="navbar-brand fw-bold text-black " to="/">
          <img src={Logo} alt="Logo" className="logo" />
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
              <NavLink to="/" className="nav-link text-black">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalogo" className="nav-link text-black">
                Catálogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/iniciar-sesion" className="nav-link text-black">
                Iniciar Sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registrarse" className="nav-link text-black">
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
