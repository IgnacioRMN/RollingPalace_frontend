import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
import "./styles/Navbar.css"

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
