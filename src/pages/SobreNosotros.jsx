import React from "react";
import { Col, Row } from "react-bootstrap";
import logoRolling from "../assets/favicon-RP.ico";
import "../styles/SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">¿Quiénes Somos?</h1>
      </div>
      <div className="text-center mb-4">
        <img
          src={logoRolling}
          alt="Logo RollingCode School"
          style={{ maxWidth: 200, height: "auto" }}
        />
      </div>
      <p className="text-justify fs-5 mx-auto mb-5" style={{ maxWidth: 800 }}>
        Somos un equipo de cinco estudiantes de <b>RollingCode School</b>,
        apasionados por el desarrollo web y comprometidos con la excelencia
        técnica. Como parte de nuestro proceso de aprendizaje, hemos
        desarrollado <b>Rolling Palace</b>, una plataforma web moderna
        construida con <b>front-end y back-end</b> que sirve como un catálogo
        interactivo de habitaciones disponibles para reservar.
        <br />
        <br />
        <b>Rolling Palace</b> es más que un proyecto académico; es una
        demostración de nuestro compromiso con el desarrollo de soluciones
        tecnológicas innovadoras y funcionales que satisfacen las necesidades
        del mercado actual.
      </p>
      <div className="row justify-content-center g-4">
        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img
            src="./src/assets/jose.png"
            alt="José Ignacio Ramón"
            className="img-fluid rounded-circle border border-primary mb-2"
          />
          <h5 className="text-primary">José Ignacio Ramón (LT)</h5>
        </div>
        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img
            src="./src/assets/tomasPando.jpg"
            alt="Tomas Pando"
            className="img-fluid rounded-circle border border-primary mb-2"
          />
          <h5 className="text-primary">Tomas Pando (SM)</h5>
        </div>
        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img
            src="./src/assets/juanMonserrat.jpeg"
            alt="Juan Andres Monserrat"
            className="img-fluid rounded-circle border border-primary mb-2"
          />
          <h5 className="text-primary">Juan Andres Monserrat</h5>
        </div>

        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img
            src="./src/assets/ericMercado.jpeg"
            alt="Eric Mercado"
            className="img-fluid rounded-circle border border-primary mb-2"
          />
          <h5 className="text-primary">Eric Mercado</h5>
        </div>
        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img
            src="./src/assets/juanStegmayer.jpeg"
            alt="Juan Stegmayer"
            className="img-fluid rounded-circle border border-primary mb-2"
          />
          <h5 className="text-primary">Juan Stegmayer</h5>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
