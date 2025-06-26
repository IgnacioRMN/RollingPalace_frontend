import React, { useState } from "react";
import "../styles/ReservaModal.css"; // Asegúrate de tener este archivo CSS

const ReservaModal = ({ isOpen, onClose, habitacion, onReservar }) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fechaInicio || !fechaFin) {
      setError("Por favor, completa ambas fechas.");
      return;
    }
    if (fechaFin < fechaInicio) {
      setError("La fecha de salida debe ser posterior a la de entrada.");
      return;
    }
    setError("");
    onReservar({ fechaInicio, fechaFin });
  };

  return (
    <div className="reserva-modal-overlay">
      <div className="reserva-modal">
        <button className="cerrar-modal" onClick={onClose}>
          X
        </button>
        <h2>Reservar habitación {habitacion?.nombre || ""}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Fecha de entrada:
            <input
              type="date"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              required
            />
          </label>
          <label>
            Fecha de salida:
            <input
              type="date"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              required
            />
          </label>
          {error && <div className="error">{error}</div>}
          <button type="submit">Confirmar reserva</button>
        </form>
      </div>
    </div>
  );
};

export default ReservaModal;
