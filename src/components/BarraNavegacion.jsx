import { Link, NavLink } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import "./BarraNavegacion.css"

const BarraNavegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Rolling Palace</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalogo" className="nav-link">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/iniciar-sesion" className="nav-link">Iniciar Sesión</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registrarse" className="nav-link">Registrarse</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
