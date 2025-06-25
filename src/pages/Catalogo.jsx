const Catalogo = () => {
  return (
    <div className="container py-5">
      <h1 className="h3 text-center mb-4 fw-bold">Catálogo de Habitaciones</h1>
      <div className="row g-3">
        {[1, 2, 3].map((habitacion) => (
          <div key={habitacion} className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h2 className="h5 card-title">Habitación {habitacion}</h2>
                <p className="card-text mb-1">Tipo: Estándar</p>
                <p className="card-text mb-1">Precio: $100/noche</p>
                <p className="card-text mb-3">Disponible: Sí</p>
                <button className="btn btn-primary">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;