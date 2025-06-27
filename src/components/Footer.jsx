import { Link } from "react-router-dom";
import "../styles/Navbar-Footer.css";

const Footer = () => {
  return (
    <footer className="bg-beige text-black py-4 mt-auto">
      <div className="container text-center">
        <p className="h5 fw-semibold">Rolling Palace</p>
        <p>Calle Hotel 123, Tucumán, Argentina</p>
        <p>Email: contacto@rollingpalace.com | Tel: +54 381 123 4567</p>
        <div className="my-3">
          <Link
            to="/sobre-nosotros"
            className="text-black text-decoration-none me-3"
          >
            Sobre Nosotros
          </Link>
          <Link to="/contacto" className="text-black text-decoration-none ">
            Contacto
          </Link>
        </div>
        <p className="text-black-50 small mb-0">
          © 2025 Rolling Palace. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
