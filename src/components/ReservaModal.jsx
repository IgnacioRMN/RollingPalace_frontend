import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/ReservaModal.css";

const ReservaModal = ({ isOpen, onClose, habitacion, onReservar }) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const hoy = new Date();
  const fechaMinima = hoy.toISOString().split("T")[0];

  if (!isOpen) {
    return null;
  }

  const validarFechas = () => {
    const entrada = new Date(fechaInicio);
    const salida = new Date(fechaFin);

    hoy.setHours(0, 0, 0, 0);

    if (!fechaInicio || !fechaFin) {
      setMensajeError("Debes completar ambas fechas.");
      return false;
    }

    if (entrada < hoy) {
      setMensajeError("La fecha de entrada no puede ser anterior a hoy.");
      return false;
    }

    if (salida <= entrada) {
      setMensajeError("La salida debe ser después de la entrada.");
      return false;
    }

    setMensajeError("");
    return true;
  };

  const manejarReserva = async (e) => {
    e.preventDefault();

    if (!validarFechas()) return;

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
    } catch (error) {
      const mensaje = error?.message || "No se pudo completar la reserva.";
      setMensajeError(mensaje);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
      });
    }
  };

  return (
    <div className="reserva-modal-overlay">
      <div className="reserva-modal">
        <button className="cerrar-modal" onClick={onClose}>
          X
        </button>

        <h2>Reservar habitación {habitacion?.nombre || ""}</h2>

        <form onSubmit={manejarReserva}>
          <label>
            Fecha de entrada:
            <input
              type="date"
              value={fechaInicio}
              min={fechaMinima}
              onChange={(e) => setFechaInicio(e.target.value)}
              required
            />
          </label>

          <label>
            Fecha de salida:
            <input
              type="date"
              value={fechaFin}
              min={fechaInicio || fechaMinima}
              onChange={(e) => setFechaFin(e.target.value)}
              required
            />
          </label>

          {mensajeError && <div className="error">{mensajeError}</div>}

          <button type="submit">Confirmar reserva</button>
        </form>
      </div>
    </div>
  );
};

export default ReservaModal;
