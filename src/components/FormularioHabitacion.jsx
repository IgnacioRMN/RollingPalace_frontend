import { Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearHabitacion,
  actualizarHabitacion,
  obtenerHabitacionPorId,
} from "../helpers/api";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "../styles/Botones.css";

const FormularioHabitacion = ({
  crear,
  show,
  handleClose,
  habitacionId,
  recargarHabitaciones,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (!crear && habitacionId) {
      cargarHabitacion(habitacionId);
    } else if (crear) {
      reset();
    }
  }, [crear, habitacionId, show]);

  const cargarHabitacion = async (id) => {
    try {
      const datos = await obtenerHabitacionPorId(id);
      setValue("numeroHabitacion", datos.numeroHabitacion);
      setValue("tipoHabitacion", datos.tipoHabitacion);
      setValue("precio", datos.precio);
      setValue("descripcion", datos.descripcion);
      setValue("imagen", datos.imagen);
      setValue("disponible", datos.disponible ? "true" : "false");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo cargar la habitación",
      });
    }
  };

  const onSubmit = async (habitacion) => {
    try {
      habitacion.precio = Number(habitacion.precio);
      habitacion.disponible = habitacion.disponible === "true";
      // Si la imagen está vacía, enviar null
      if (!habitacion.imagen || habitacion.imagen.trim() === "") {
        habitacion.imagen = null;
      }
      if (crear) {
        await crearHabitacion(habitacion);
      } else {
        await actualizarHabitacion(habitacionId, habitacion);
      }

      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: crear
          ? "Habitación creada correctamente"
          : "Habitación actualizada correctamente",
      });
      if (recargarHabitaciones) recargarHabitaciones();
      reset();
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error, intenta nuevamente",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {crear ? "Crear habitación" : "Editar habitación"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="my-2" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNumeroHabitacion">
            <Form.Label>Número de Habitación*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 101"
              {...register("numeroHabitacion", {
                required: "El número de habitación es obligatorio",
                minLength: {
                  value: 1,
                  message: "Debe ingresar al menos 1 carácter",
                },
                maxLength: { value: 10, message: "Máximo 10 caracteres" },
              })}
              disabled={!crear}
            />
            <Form.Text className="text-danger">
              {errors.numeroHabitacion?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTipoHabitacion">
            <Form.Label>Tipo de Habitación*</Form.Label>
            <Form.Select
              {...register("tipoHabitacion", {
                required: "Debe seleccionar un tipo",
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="Simple">Simple</option>
              <option value="Doble">Doble</option>
              <option value="Suite">Suite</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.tipoHabitacion?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 1000"
              {...register("precio", {
                required: "El precio es obligatorio",
                min: { value: 1, message: "El precio debe ser mayor a 0" },
                max: { value: 100000, message: "El precio máximo es 100000" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripción de la habitación"
              {...register("descripcion", {
                maxLength: { value: 250, message: "Máximo 250 caracteres" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL de la imagen"
              {...register("imagen", {
                pattern: {
                  value:
                    /^$|^https?:\/\/.*\.(?:png|jpe?g|gif|bmp|webp|svg)(\?.*)?$/i,
                  message:
                    "Debe ingresar una URL de imagen válida (png, jpg, jpeg, gif, bmp, webp, svg) o dejar vacío",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDisponible">
            <Form.Label>Disponible*</Form.Label>
            <Form.Select
              {...register("disponible", {
                required: "Debe seleccionar disponibilidad",
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.disponible?.message}
            </Form.Text>
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            className="w-100 mt-3 btn-dark-elegant"
          >
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioHabitacion;
