/* import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/LogoRP.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-delgada">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="75"
            height="50"
            className="d-inline-block align-top"
            alt="Rolling Palace Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={NavLink} to="/iniciar-sesion">Iniciar Sesión</Nav.Link>
            <Nav.Link as={NavLink} to="/registrarse">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent; */