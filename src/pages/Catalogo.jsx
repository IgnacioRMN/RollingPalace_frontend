import React from 'react';
import '../styles/Catalogo.css';

const habitaciones = [
  {
    id: 1,
    tipo: 'Estándar',
    precio: 100,
    disponible: true,
    imagen: 'https://bajainn.com/wp-content/uploads/2019/12/Mar-habitacion-Hotel-Cortez-seccion-ensenada.jpg',
  },
  {
    id: 2,
    tipo: 'Suite Ejecutiva',
    precio: 250,
    disponible: false,
    imagen: 'https://hotelpimarblanes.com/wp-content/uploads/2024/04/PIMAR-PREMIUM.jpg',
  },
  {
    id: 3,
    tipo: 'Deluxe Premium',
    precio: 350,
    disponible: true,
    imagen: 'https://hotelmalibu.com.mx/uploads/habitaciones/SUITE%20EJECUTIVA%20(2).webp',
  },
];

const Catalogo = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold display-5 text-primary">Catálogo de Habitaciones</h1>
      <div className="row g-4">
        {habitaciones.map((habitacion) => (
          <div key={habitacion.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
              <img
                src={habitacion.imagen}
                className="card-img-top"
                alt={`Habitación ${habitacion.tipo}`}
                style={{ height: '230px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-primary">{habitacion.tipo}</h5>
                <p className="card-text mb-1"><strong>Precio:</strong> ${habitacion.precio}/noche</p>
                <p className="card-text mb-3">
                  <strong>Disponible:</strong>{' '}
                  {habitacion.disponible ? (
                    <span className="text-success">Sí</span>
                  ) : (
                    <span className="text-danger">No</span>
                  )}
                </p>
                <button
                  className={`btn mt-auto ${
                    habitacion.disponible ? 'btn-primary' : 'btn-secondary'
                  }`}
                  disabled={!habitacion.disponible}
                >
                  {habitacion.disponible ? 'Reservar' : 'No disponible'}
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
