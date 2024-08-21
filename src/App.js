import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PerroInfoDetallado from "./pages/PerroInfoDetallado";
import GatoDetail from "./pages/GatoDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perro" element={<PerroInfoDetallado />} />
        <Route path="/Gatos" element={<GatoDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
