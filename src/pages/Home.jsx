import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Botones.css";
import "../styles/Home.css";
import Hero from "../components/Hero.jsx";
import { LiaHotelSolid } from "react-icons/lia";
import { MdOutlineSpa } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      {/* Bienvenida */}
      <section className="hero-bg text-center py-2">
        <div className="">
          <Hero />
        </div>
      </section>

      {/* Servicios */}
      <section className="container py-5">
        <h2 className="text-center text-dark-elegant mb-5">
          Nuestros Servicios
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <LiaHotelSolid className="mb-3" size={40} />
                <h5 className="card-title">Alojamiento</h5>

                <p className="card-text">
                  Habitaciones confortables para tu descanso perfecto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <MdOutlineSpa className="mb-3" size={40} />
                <h5 className="card-title">Spa & Relax</h5>
                <p className="card-text">
                  Espacios pensados para tu bienestar y tranquilidad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <IoCarOutline className="mb-3" size={40} />
                <h5 className="card-title">Transporte</h5>
                <p className="card-text">
                  Servicio de traslado cómodo y seguro para nuestros huéspedes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax  */}
      <section
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg')",
          height: "60vh",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold">
            Viví una experiencia inolvidable
          </h2>
          <p className="lead">
            Descubrí el confort, la elegancia y el lujo que merecés.
          </p>
        </div>
      </section>

      <section className="bg-white text-center py-5">
        <div className="container">
          <h2 className="mb-4">¿Listo para reservar?</h2>
          <a href="/catalogo" className="btn btn-dark-elegant btn-lg px-5">
            Reservá ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
