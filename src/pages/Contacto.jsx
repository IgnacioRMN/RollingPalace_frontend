import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import "../styles/Botones.css";

const Contacto = () => {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    console.log("Formulario enviado", form);

    setForm({ email: "", message: "" });
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-4 p-4 mb-4"
          >
            <h1 className="h3 mb-4 fw-bold">Contáctanos</h1>
            <div className="mb-3">
              <label className="form-label">Tu e‑mail</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="form-control"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tu mensaje</label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Escribe tu mensaje..."
              />
            </div>
            <button type="submit" className="btn btn-dark-elegant">
              Enviar
            </button>
          </form>
        </div>
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <div className="mb-3">
            <Mail className="me-2" /> contacto@rollingpalace.com
          </div>
          <div className="mb-3">
            <Phone className="me-2" /> +54 381 123 4567
          </div>
          <div className="mb-3">
            <MapPin className="me-2" /> Calle Hotel 123, Tucumán
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-primary">
              <Facebook />
            </a>
            <a href="#" className="text-primary">
              <Instagram />
            </a>
            <a href="#" className="text-primary">
              <Twitter />
            </a>
            <a href="#" className="text-primary">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
