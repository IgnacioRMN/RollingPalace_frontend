import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import "../styles/Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado", form);

    setForm({ email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <form
        onSubmit={handleSubmit}
        className="col-span-2 bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold">Contáctanos</h1>

        <label className="flex flex-col gap-2">
          <span className="font-medium">Tu e‑mail</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="tucorreo@ejemplo.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-medium">Tu mensaje</span>
          <textarea
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder="Escribe tu mensaje..."
          />
        </label>

        <button
          type="submit"
          className="w-fit bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-xl transition-colors"
        >
          Enviar
        </button>
      </form>

      <aside className="col-span-1 flex flex-col gap-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Datos de contacto</h2>
          <p className="flex items-center gap-3">
            <MapPin className="w-5 h-5" /> Gral. José María Paz 576, San Miguel
            de Tucumán, Argentina
          </p>
          <p className="flex items-center gap-3">
            <Phone className="w-5 h-5" /> +54 9 11 1234‑5678
          </p>
          <p className="flex items-center gap-3">
            <Mail className="w-5 h-5" /> rollingpalace@gmail.com
          </p>
        </div>

        <div className="flex gap-4 justify-center lg:justify-start">
          <a
            href="https://facebook.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Contacto;
