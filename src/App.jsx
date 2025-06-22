import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import Footer from "./componets/footer";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
