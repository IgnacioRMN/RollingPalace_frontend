import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Botones.css";

const Error404 = () => {
  const navigate = useNavigate();

  const volverInicio = () => {
    navigate("/");
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Container className="text-center p-5 rounded  ">
        <h1 className="display-1 fw-bold mt-3 mb-2 text-danger">404</h1>
        <p className="fs-3 mb-1 text-dark">
          <span className="text-danger">¡Ups!</span> Página no encontrada.
        </p>
        <p className="lead mb-4 text-secondary">
          La página que estás buscando no existe o fue movida.
        </p>
        <button
          className="btn btn-dark-elegant px-4 py-2 fs-5"
          onClick={volverInicio}
        >
          Volver al inicio
        </button>
      </Container>
    </div>
  );
};

export default Error404;
