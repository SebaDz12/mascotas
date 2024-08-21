import React from "react";
import { useParams } from "react-router-dom";
import { perros } from "../pages/data"; // Importa la misma data que en Home.js

const PerroInfo = () => {
  const { nombre } = useParams(); // Obtener el nombre del perro desde la URL

  const perro = perros.find((p) => p.nombre === nombre); // Buscar la información del perro por nombre

  if (!perro) {
    return <h2>Perro no encontrado</h2>; // Manejar caso en el que el perro no exista
  }

  return (
    <div className="container mt-5">
      <h1>Información de {perro.nombre}</h1>
      <img
        src={perro.imagen}
        alt={perro.nombre}
        style={{ maxWidth: "300px", width: "100%" }}
      />
      <ul className="list-unstyled">
        <li>Edad: {perro.edad}</li>
        <li>Color: {perro.color}</li>
        <li>Personalidad: {perro.personalidad}</li>
        <li>Residencia: {perro.residencia}</li>
      </ul>
    </div>
  );
};

export default PerroInfo;
