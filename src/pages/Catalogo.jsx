import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerHabitaciones, crearReserva } from "../helpers/api";
import ReservaModal from "../components/ReservaModal";
import "../styles/Botones.css";

const Catalogo = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const navigate = useNavigate();

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

  const usuarioLogueado = !!localStorage.getItem("token");

  const handleReservarClick = (habitacion) => {
    if (!usuarioLogueado) {
      navigate("/login");
      return;
    }
    setHabitacionSeleccionada(habitacion);
    setModalAbierto(true);
  };

  const handleCerrarModal = () => {
    setModalAbierto(false);
    setHabitacionSeleccionada(null);
  };

  const handleConfirmarReserva = async ({ fechaInicio, fechaFin }) => {
    try {
      await crearReserva({
        habitacionId: habitacionSeleccionada._id,
        fechaInicio,
        fechaFin,
      });
      handleCerrarModal();
    } catch (error) {}
  };

  return (
    <>
      <div className="container py-5">
        <h1 className="h3 text-center mb-4 fw-bold">
          Catálogo de Habitaciones
        </h1>
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
                      onClick={() => handleReservarClick(habitacion)}
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

        <ReservaModal
          isOpen={modalAbierto}
          onClose={handleCerrarModal}
          habitacion={habitacionSeleccionada}
          onReservar={handleConfirmarReserva}
        />
      </div>
    </>
  );
};

export default Catalogo;
