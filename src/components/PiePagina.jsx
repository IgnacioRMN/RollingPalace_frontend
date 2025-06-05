const PiePagina = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Rolling Palace</p>
        <p className="mt-2">Calle Hotel 123, Tucumán, Argentina</p>
        <p>Email: contacto@rollingpalace.com | Teléfono: +54 381 123 4567</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-yellow-400">Política de Privacidad</a>
          <a href="#" className="hover:text-yellow-400">Términos de Servicio</a>
          <a href="#" className="hover:text-yellow-400">Contáctanos</a>
        </div>
        <p className="mt-4 text-sm">© 2025 Rolling Palace. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PiePagina;