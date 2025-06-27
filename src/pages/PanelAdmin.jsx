import { useEffect, useState } from "react";
import {
  obtenerHabitaciones,
  eliminarHabitacion,
  actualizarHabitacion,
  obtenerTodasReservas,
  actualizarEstadoReserva,
  eliminarReserva,
} from "../helpers/api";
import FormularioHabitacion from "../components/FormularioHabitacion";
import Swal from "sweetalert2";
import "../styles/PanelAdmin.css";
import "../styles/Botones.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const PanelAdmin = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editar, setEditar] = useState(false);
  const [habitacionId, setHabitacionId] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [cargandoReservas, setCargandoReservas] = useState(true);
  const [errorReservas, setErrorReservas] = useState("");

  const cargarHabitaciones = async () => {
    try {
      const datos = await obtenerHabitaciones();
      setHabitaciones(ordenarPorNombre(datos));
    } catch (error) {
      console.error("Error cargando habitaciones:", error);
    }
  };

  const ordenarPorNombre = (lista) => {
    return [...lista].sort((a, b) =>
      a.numeroHabitacion.localeCompare(b.numeroHabitacion, "es", {
        sensitivity: "base",
      })
    );
  };

  useEffect(() => {
    cargarHabitaciones();
  }, []);

  const eliminarHabitacionHandler = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro de eliminar esta habitación?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      try {
        const resultado = await eliminarHabitacion(id);
        if (resultado) {
          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "Habitación eliminada correctamente",
          });
          const datos = await obtenerHabitaciones();
          setHabitaciones(ordenarPorNombre(datos));
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al eliminar la habitación",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al eliminar la habitación",
        });
      }
    }
  };

  const handleAbrirCrear = () => {
    setEditar(false);
    setHabitacionId(null);
    setShowModal(true);
  };

  const handleAbrirEditar = (id) => {
    setEditar(true);
    setHabitacionId(id);
    setShowModal(true);
  };

  const handleActualizarEstado = async (id, nuevoEstado, habitacionId) => {
    const token = localStorage.getItem("token");
    try {
      await actualizarEstadoReserva(id, nuevoEstado, token);
      // Si se confirma la reserva, marcar la habitación como ocupada
      if (nuevoEstado === "Confirmada" && habitacionId) {
        await actualizarHabitacion(habitacionId, { estado: "ocupada" }, token);
        await cargarHabitaciones();
      }
      // Si se cancela la reserva, marcar la habitación como disponible
      if (nuevoEstado === "Cancelada" && habitacionId) {
        await actualizarHabitacion(
          habitacionId,
          { estado: "disponible" },
          token
        );
        await cargarHabitaciones();
      }
      Swal.fire({
        icon: "success",
        title: `Reserva ${nuevoEstado.toLowerCase()}`,
        timer: 1200,
        showConfirmButton: false,
      });
      // Recargar reservas
      const data = await obtenerTodasReservas(token);
      setReservas(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "No se pudo actualizar la reserva",
      });
    }
  };

  //función para eliminar reserva cancelada
  const handleEliminarReserva = async (id) => {
    const token = localStorage.getItem("token");
    const result = await Swal.fire({
      title: "¿Eliminar reserva?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      try {
        await eliminarReserva(id, token);
        Swal.fire({
          icon: "success",
          title: "Reserva eliminada",
          timer: 1200,
          showConfirmButton: false,
        });
        // Recargar reservas
        const data = await obtenerTodasReservas(token);
        setReservas(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "No se pudo eliminar la reserva",
        });
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    obtenerTodasReservas(token)
      .then((data) => {
        setReservas(data);
        setCargandoReservas(false);
      })
      .catch((err) => {
        setErrorReservas(err.message || "Error al cargar reservas");
        setCargandoReservas(false);
      });
  }, []);

  return (
    <div className="container my-5">
      {/* Botón para abrir el modal */}
      <div className="mb-4 text-end">
        <button
          className="btn btn-dark-elegant text-white"
          onClick={handleAbrirCrear}
        >
          Agregar Habitación
        </button>
      </div>
      <FormularioHabitacion
        crear={!editar}
        show={showModal}
        handleClose={() => setShowModal(false)}
        habitacionId={habitacionId}
        recargarHabitaciones={cargarHabitaciones}
      />
      {/* Encabezado */}
      <div className="row align-items-center mb-4">
        <div className="col-md-8">
          <h1 className="h3 fw-bold text-dark">Panel de Habitaciones</h1>
          <p className="text-muted">Listado y gestión de habitaciones</p>
        </div>
      </div>

      {/* Tabla de habitaciones */}
      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table table-hover table-bordered mb-0">
          <thead className="table-warning text-uppercase">
            <tr>
              <th>Número</th>
              <th>Tipo</th>
              <th>Precio</th>
              <th className="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {habitaciones.length > 0 ? (
              habitaciones.map((habitacion) => (
                <tr key={habitacion._id}>
                  <td>{habitacion.numeroHabitacion}</td>
                  <td>{habitacion.tipoHabitacion}</td>
                  <td>${habitacion.precio?.toLocaleString()}</td>
                  <td className="text-end">
                    <div className="d-flex justify-content-end gap-2">
                      <button
                        onClick={() => handleAbrirEditar(habitacion._id)}
                        className="btn btn-sm btn-outline-admin"
                      >
                        <FaEdit /> Editar
                      </button>
                      <button
                        onClick={() =>
                          eliminarHabitacionHandler(habitacion._id)
                        }
                        className="btn btn-sm btn-outline-admin "
                      >
                        <MdDelete /> Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted py-3">
                  No hay habitaciones registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Reservas del sistema */}
      <div className="row align-items-center mb-4 mt-5">
        <div className="col-md-8">
          <h2 className="h4 fw-bold text-dark">Reservas del sistema</h2>
          <p className="text-muted">Listado de todas las reservas realizadas</p>
        </div>
      </div>
      <div className="table-responsive bg-white rounded shadow-sm mb-5">
        {cargandoReservas ? (
          <div className="text-center py-4">Cargando reservas...</div>
        ) : errorReservas ? (
          <div className="text-center text-danger py-4">{errorReservas}</div>
        ) : reservas.length === 0 ? (
          <div className="text-center text-muted py-4">
            No hay reservas registradas.
          </div>
        ) : (
          <table className="table table-hover table-bordered mb-0">
            <thead className="table-warning text-uppercase">
              <tr>
                <th>Usuario</th>
                <th>Habitación</th>
                <th>Desde</th>
                <th>Hasta</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva._id}>
                  <td>
                    {reserva.usuario?.nombre ||
                      reserva.usuario?.email ||
                      reserva.usuario}
                  </td>
                  <td>
                    {reserva.habitacion?.numeroHabitacion || reserva.habitacion}
                  </td>
                  <td>{reserva.fechaInicio?.slice(0, 10)}</td>
                  <td>{reserva.fechaFin?.slice(0, 10)}</td>
                  <td>{reserva.estado || "Pendiente"}</td>
                  <td>
                    {(reserva.estado === "Pendiente" ||
                      reserva.estado === "Confirmada") && (
                      <>
                        {reserva.estado === "Pendiente" && (
                          <button
                            className="btn btn-dark-elegant btn-sm me-2"
                            onClick={() =>
                              handleActualizarEstado(
                                reserva._id,
                                "Confirmada",
                                reserva.habitacion?._id || reserva.habitacion
                              )
                            }
                          >
                            <FaRegCheckCircle className="fs-5" />
                          </button>
                        )}
                        <button
                          className="btn btn-dark-elegant btn-sm"
                          onClick={() =>
                            handleActualizarEstado(
                              reserva._id,
                              "Cancelada",
                              reserva.habitacion?._id || reserva.habitacion
                            )
                          }
                        >
                          <MdOutlineCancel className="fs-5" />
                        </button>
                      </>
                    )}
                    {reserva.estado === "Cancelada" && (
                      <button
                        className="btn btn-dark-elegant btn-sm"
                        onClick={() => handleEliminarReserva(reserva._id)}
                      >
                        Eliminar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default PanelAdmin;
