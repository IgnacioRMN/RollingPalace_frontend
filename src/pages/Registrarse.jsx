import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./Registrarse.css";

const Registrarse = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (IniciarSesion(usuario)) {
      setUsuarioLogueado(usuario.email);
      alert("Logueado correctamente");
      navegacion("/administrador");
    } else {
      alert("Email o contraseña incorrecta");
    }
  };

  return (
    <section className="Registrarse-section">
      <Card className="Registrarse-card">
        <Card.Body>
          <Card.Title className="Registrarse-title">Registrarse</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4" controlId="formGroupEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ejemplo@gmail.com"
                className="form-input"
                {...register("email", {
                  required: "El mail es un dato obligatorio",
                  minLength: {
                    value: 10,
                    message: "Debe ingresar como mínimo 10 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar como máximo 30 caracteres",
                  },
                })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Label className="form-label">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ejemplo123"
                className="form-input"
                {...register("password", {
                  required: "La contraseña es un campo obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar como mínimo 8 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Debe ingresar como máximo 20 caracteres",
                  },
                })}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="Registrarse-button"
              >
                Registrarse
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Registrarse;
