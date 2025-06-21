
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="h5 fw-semibold">Rolling Palace</p>
        <p>Calle Hotel 123, Tucumán, Argentina</p>
        <p>Email: contacto@rollingpalace.com | Tel: +54 381 123 4567</p>
        <div className="my-3">
          <a href="#" className="text-white text-decoration-none me-3">Política de Privacidad</a>
          <a href="#" className="text-white text-decoration-none me-3">Términos de Servicio</a>
          <a href="#" className="text-white text-decoration-none">Contáctanos</a>
        </div>
        <p className="text-white-50 small mb-0">© 2025 Rolling Palace. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
