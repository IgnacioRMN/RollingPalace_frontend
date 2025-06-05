const Catalogo = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Catálogo de Habitaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((habitacion) => (
          <div key={habitacion} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">Habitación {habitacion}</h2>
            <p>Tipo: Estándar</p>
            <p>Precio: $100/noche</p>
            <p>Disponible: Sí</p>
            <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700">
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;