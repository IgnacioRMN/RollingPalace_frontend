import React, { useEffect, useState } from "react";
import { obtenerReservasUsuario } from "../helpers/api";

const MisReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Debes iniciar sesión para ver tus reservas.");
      setCargando(false);
      return;
    }
    obtenerReservasUsuario(token)
      .then((data) => {
        setReservas(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message || "Error al cargar reservas");
        setCargando(false);
      });
  }, []);

  if (cargando)
    return <div className="text-center py-5">Cargando reservas...</div>;
  if (error) return <div className="text-center text-danger py-5">{error}</div>;

  return (
    <div className="container py-5">
      <h1 className="h3 text-center mb-4 fw-bold">Mis Reservas</h1>
      {reservas.length === 0 ? (
        <div className="text-center text-muted">No tienes reservas.</div>
      ) : (
        <div className="row g-3">
          {reservas.map((reserva) => (
            <div key={reserva._id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h5 card-title">
                    Habitación{" "}
                    {reserva.habitacion?.numeroHabitacion || reserva.habitacion}
                  </h2>
                  <p className="card-text mb-1">
                    Desde: {reserva.fechaInicio?.slice(0, 10)}
                  </p>
                  <p className="card-text mb-1">
                    Hasta: {reserva.fechaFin?.slice(0, 10)}
                  </p>
                  <p className="card-text mb-1">
                    Estado: {reserva.estado || "Pendiente"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MisReservas;
