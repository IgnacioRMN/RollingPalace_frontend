import { useEffect, useState } from "react";
import { obtenerHabitaciones } from "../helpers/api";

const Catalogo = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const cargarHabitaciones = async () => {
      try {
        const datos = await obtenerHabitaciones();
        setHabitaciones(datos);
      } catch (error) {
        setHabitaciones([]);
      }
    };
    cargarHabitaciones();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="h3 text-center mb-4 fw-bold">Catálogo de Habitaciones</h1>
      <div className="row g-3">
        {habitaciones.length > 0 ? (
          habitaciones.map((habitacion) => (
            <div key={habitacion._id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h5 card-title">
                    Habitación {habitacion.numeroHabitacion}
                  </h2>
                  <p className="card-text mb-1">
                    Tipo: {habitacion.tipoHabitacion}
                  </p>
                  <p className="card-text mb-1">
                    Precio: ${habitacion.precio?.toLocaleString()}/noche
                  </p>
                  <p className="card-text mb-3">
                    Disponible: {habitacion.disponible ? "Sí" : "No"}
                  </p>
                  <button
                    className="btn btn-primary"
                    disabled={!habitacion.disponible}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            No hay habitaciones disponibles
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
