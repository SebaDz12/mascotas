import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/pages/assets/fondo.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PerroInfoDetallado from "./components/PerroInfoDetallado";
import Contacto from "./pages/Contacto";
import Mascotas from "./pages/Mascotas";
import Gatos from "./pages/Gatos"; // Asegúrate de que la ruta sea correcta

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {<Route path="/perro" element={<PerroInfoDetallado />} />}
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="/gatos" element={<Gatos />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);
