import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { PlusCircle, XCircle, Eye, PencilSquare } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { obtenerUnSoloJuegoAPI, borrarJuegoAPI } from "../helpers/queries";

/**
 * Componente único que fusiona la lógica de "Administrador" y "AdministrarJuegos".
 * - Muestra un formulario para agregar un nuevo juego (redirige a /administrador/crear).
 * - Lista los videojuegos existentes en una tabla con opciones para ver, editar y eliminar.
 */
const Administrador = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const navigate = useNavigate();

  // Cargar videojuegos al montar el componente
  useEffect(() => {
    const cargarJuegos = async () => {
      const juegosObtenidos = await obtenerUnSoloJuegoAPI();
      setVideojuegos(juegosObtenidos);
    };
    cargarJuegos();
  }, []);

  /**
   * Maneja el submit del formulario. Por ahora solo redirige a la ruta de creación.
   * Si más adelante quieres usar "crearJuegoAPI", aquí es donde deberías llamarlo.
   */
  const handleAgregarJuego = (e) => {
    e.preventDefault();
    navigate("/administrador/crear");
  };

  /**
   * Elimina un juego de la tabla y de la base de datos (vía API).
   */
  const handleEliminarJuego = async (id) => {
    const respuesta = await borrarJuegoAPI(id);
    if (respuesta.ok) {
      setVideojuegos(videojuegos.filter((juego) => juego.id !== id));
    } else {
      console.error("Error al eliminar el videojuego");
    }
  };

  /**
   * Navega a la vista de detalles.
   */
  const handleVerDetalles = (id) => {
    navigate(`/detalle-juego/${id}`);
  };

  /**
   * Navega a la vista de edición.
   */
  const handleEditarJuego = (id) => {
    navigate(`/administrador/editar/${id}`);
  };

  return (
    <section className="mainSection mb-4">
      {/* Encabezado */}
      <h1 className="text-center mt-5">Agregar videojuego</h1>

      {/* Formulario para agregar un nuevo juego (redirige a /administrador/crear) */}
      <Form className="container d-flex" onSubmit={handleAgregarJuego}>
        <Form.Group className="w-100" controlId="nuevoJuego">
          <Form.Control
            type="text"
            placeholder="Agregar videojuego"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle />
        </Button>
      </Form>

      {/* Tabla con la lista de videojuegos */}
      <Table responsive striped bordered hover className="mt-3">
        <thead className="text-center">
          <tr>
            <th>Cod</th>
            <th>Nombre del juego</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Imagen</th>
            <th>Desarrollador</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {videojuegos.length ? (
            videojuegos.map((juego) => (
              <tr key={juego.id} className="align-middle text-center">
                <td>{juego.id}</td>
                <td>{juego.nombre}</td>
                <td>{juego.precio}</td>
                <td>{juego.categoria}</td>
                <td>
                  <img
                    src={juego.imagen}
                    alt={juego.nombre}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{juego.desarrollador}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleEliminarJuego(juego.id)}
                  >
                    <XCircle />
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleVerDetalles(juego.id)}
                  >
                    <Eye />
                  </Button>{" "}
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEditarJuego(juego.id)}
                  >
                    <PencilSquare />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No hay videojuegos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
