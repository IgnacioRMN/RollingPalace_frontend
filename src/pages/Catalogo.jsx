import { useEffect, useState } from "react";
import { obtenerHabitaciones } from "../helpers/api";
import "../styles/Botones.css";

const Catalogo = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  // Ordenar por número de habitación, igual que en PanelAdmin
  const ordenarPorNombre = (lista) => {
    return [...lista].sort((a, b) =>
      a.numeroHabitacion.localeCompare(b.numeroHabitacion, "es", {
        sensitivity: "base",
      })
    );
  };

  useEffect(() => {
    const cargarHabitaciones = async () => {
      try {
        const datos = await obtenerHabitaciones();
        setHabitaciones(ordenarPorNombre(datos));
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
                {habitacion.imagen && (
                  <img
                    src={habitacion.imagen}
                    alt={`Habitación ${habitacion.numeroHabitacion}`}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
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
                  <p className="card-text mb-1">{habitacion.descripcion}</p>
                  <p className="card-text mb-3">
                    Disponible: {habitacion.disponible ? "Sí" : "No"}
                  </p>
                  <button
                    className="btn btn-dark-elegant"
                    disabled={!habitacion.disponible}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted py-3">
            No hay habitaciones disponibles
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
