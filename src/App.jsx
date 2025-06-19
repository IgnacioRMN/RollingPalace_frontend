import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraNavegacion from "./components/BarraNavegacion";
import PiePagina from "./components/PiePagina";
import Home from "./pages/Home";
import IniciarSesion from "./pages/IniciarSesion";
import Registrarse from "./pages/Registrarse";
import Catalogo from "./pages/Catalogo";
import PanelAdmin from "./pages/PanelAdmin";

import ProtectedRoute from "./routes/ProtectedRoute";

import { useState } from "react";

import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import "./styles/App.css";


function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <BarraNavegacion
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <main className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/iniciar-sesion"
              element={
                <IniciarSesion setUsuarioLogueado={setUsuarioLogueado} />
              }
            />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/catalogo" element={<Catalogo />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute usuarioLogueado={usuarioLogueado}>
                  <PanelAdmin />
                </ProtectedRoute>
              }
            />

            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/admin" element={<PanelAdmin />} />

            <Route
              path="*"
              element={
                <div className="text-center py-5">
                  404 - Página no encontrada
                </div>
              }
            />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
}

export default App;
