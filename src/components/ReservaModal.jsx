import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/ReservaModal.css";

const ReservaModal = ({ isOpen, onClose, habitacion, onReservar }) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
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
    try {
      await onReservar({ fechaInicio, fechaFin });
      Swal.fire({
        icon: "success",
        title: "Reserva realizada",
        text: "¡Tu reserva fue registrada con éxito!",
        timer: 1800,
        showConfirmButton: false,
      });
      onClose();
    } catch (err) {
      setError(err?.message || "No se pudo realizar la reserva");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "No se pudo realizar la reserva",
      });
    }
  };

  return (
    <div className="reserva-modal-overlay">
      <div className="reserva-modal">
        <button
          className="cerrar-modal"
          onClick={onClose}
          aria-label="Cerrar modal de reserva"
        >
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
          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}
          <button type="submit">Confirmar reserva</button>
        </form>
      </div>
    </div>
  );
};

export default ReservaModal;
