import logo from "../assets/LogoRP.png";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/catalogo");
  };

  return (
    <div className="hero-bg position-relative py-12">
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Columna izquierda */}
          <div className="col-lg-6 col-12 text-white">
            <div className="text-center text-md-start">
              <h1 className="display-2 fw-bold mb-3">
                Descubrí el lujo en su máxima expresión
              </h1>
            </div>

            {/* Formulario de búsqueda */}
            <div className="mt-4">
              <div className="rounded-md-pill shadow rounded-3 mb-4 bg-white">
                <div className="p-md-2 p-4">
                  <form className="row g-1" onSubmit={handleSubmit}>
                    <div className="col-12 col-md-5">
                      <div className="input-group mb-2 mb-md-0 border-md-0 border rounded-pill">
                        <span
                          className="input-group-text bg-white border-0 pe-1 ps-md-3 ps-md-0"
                          id="checkin"
                        >
                          <i className="bi bi-calendar-event" />
                        </span>
                        <input
                          type="date"
                          className="form-control rounded-pill border-0 ps-3"
                          aria-label="Fecha de entrada"
                          aria-describedby="checkin"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="input-group mb-3 mb-md-0 border-md-0 border rounded-pill">
                        <span
                          className="input-group-text bg-transparent border-0 pe-0 ps-md-0"
                          id="checkout"
                        >
                          <i className="bi bi-calendar-check" />
                        </span>
                        <input
                          type="date"
                          className="form-control rounded-pill border-0 ps-3"
                          aria-label="Fecha de salida"
                          aria-describedby="checkout"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-3 text-end d-grid">
                      <button
                        type="submit"
                        className="btn btn-dark-elegant rounded-pill"
                      >
                        Reservar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="offset-lg-1 col-lg-5 col-12 text-center">
            <div className="position-relative">
              <img
                src={logo}
                className="img-fluid logo-hero"
                alt="Rolling Palace Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
