import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import PiePagina from './components/PiePagina';
import Home from './pages/Home';
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import Catalogo from './pages/Catalogo';
import PanelAdmin from './pages/PanelAdmin';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <BarraNavegacion />
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/admin" element={<PanelAdmin />} />
            <Route path="*" element={<div className="text-center py-5">404 - Página no encontrada</div>} />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
}

export default App;
