import { useEffect, useState } from "react";
import { obtenerHabitaciones, eliminarHabitacion } from "../helpers/api";
import FormularioHabitacion from "../components/FormularioHabitacion";
import Swal from "sweetalert2";
import "../styles/PanelAdmin.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PanelAdmin = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editar, setEditar] = useState(false);
  const [habitacionId, setHabitacionId] = useState(null);

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
    </div>
  );
};
export default PanelAdmin;
