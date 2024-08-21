import React from "react";
import { useLocation } from "react-router-dom";

const GatoDetalle = () => {
  const location = useLocation();
  const { nombre, edad, color, personalidad, residencia, imagen } =
    location.state;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h5>Información del Gato</h5>
          <p>Nombre: {nombre}</p>
          <p>Edad: {edad}</p>
          <p>Color: {color}</p>
          <p>Personalidad: {personalidad}</p>
          <p>Residencia: {residencia}</p>
        </div>
        <div className="col-md-4">
          <h5>Contacto</h5>
          <p>Email: ejemplo@correo.com</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Dirección: Calle Falsa 123, Talca</p>
        </div>
        <div className="col-md-4">
          <h5>Imagen del Gato</h5>
          <img src={imagen} alt={nombre} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default GatoDetalle;
