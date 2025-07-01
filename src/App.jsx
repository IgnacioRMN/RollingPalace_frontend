import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import PanelAdmin from "./pages/PanelAdmin";
import ProteccionRutas from "./routes/ProteccionRutas";
import SobreNosotros from "./pages/SobreNosotros";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import MisReservas from "./pages/MisReservas";
import "./styles/App.css";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  useEffect(() => {
    if (!usuarioLogueado) {
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
    }
  }, [usuarioLogueado]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
            />
            <Route path="/registro" element={<Registro />} />
            <Route
              path="/panel-admin"
              element={
                <ProteccionRutas usuarioLogueado={usuarioLogueado}>
                  <PanelAdmin />
                </ProteccionRutas>
              }
            />
            <Route
              path="/mis-reservas"
              element={
                <ProteccionRutas usuarioLogueado={usuarioLogueado}>
                  <MisReservas />
                </ProteccionRutas>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
