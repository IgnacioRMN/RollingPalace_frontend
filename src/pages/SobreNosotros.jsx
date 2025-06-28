import { Col, Row } from "react-bootstrap";
import logoRolling from "../assets/favicon-RP.ico";
import "../styles/SobreNosotros.css";
import Jose from "../assets/jose.png";
import TomasPando from "../assets/tomasPando.jpg";
import JuanMonserrat from "../assets/juanMonserrat.jpeg";
import EricMercado from "../assets/ericMercado.jpeg";
import JuanStegmayer from "../assets/juanStegmayer.jpeg";

const SobreNosotros = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-header">
        <h1>¿Quiénes Somos?</h1>
      </div>

      <div className="about-us-logo">
        <img
          src={logoRolling}
          alt="Logo RollingCode School"
          className="logo-image"
        />
      </div>

      <p className="about-us-description">
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

      <Row className="team-members">
        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img src={Jose} alt="José Ignacio Ramón" />
          </div>
          <h5 className="text-primary">José Ignacio Ramón (LT)</h5>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img src={TomasPando} alt="Tomas Pando" />
          </div>
          <h5 className="text-primary">Tomas Pando (SM)</h5>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img src={JuanMonserrat} alt="Juan Andres Monserrat" />
          </div>
          <h5 className="text-primary">Juan Andres Monserrat</h5>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img src={EricMercado} alt="Eric Mercado" />
          </div>
          <h5 className="text-primary">Eric Mercado</h5>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img src={JuanStegmayer} alt="Juan Stegmayer" />
          </div>
          <h5 className="text-primary">Juan Stegmayer</h5>
        </Col>
      </Row>
    </section>
  );
};

export default SobreNosotros;
