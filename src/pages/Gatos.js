import React, { useState } from "react";
import Card from "../components/Card"; // Asegúrate de que la ruta sea correcta
import gato1 from "../pages/assets/gato1.jpg"; // Asegúrate de que la ruta sea correcta
import gato2 from "../pages/assets/gato2.jpg";
import gato3 from "../pages/assets/gato3.jpg";
import gato4 from "../pages/assets/gato4.png";
import gato5 from "../pages/assets/gato5.jpg";
import gato6 from "../pages/assets/gato6.jpg";
import ContactForm from "../components/Card";

import "../components/Gato.css"; // Importa el archivo CSS

const Gatos = () => {
  const [selectedGato, setSelectedGato] = useState(null);

  const gatos = [
    {
      nombre: "Felix",
      edad: "2 años",
      color: "Negro y blanco",
      personalidad: "Juguetón",
      residencia: "Santiago",
      imagen: gato1,
    },
    {
      nombre: "Michi",
      edad: "1 año",
      color: "Gris",
      personalidad: "Cariñoso",
      residencia: "Valparaíso",
      imagen: gato2,
    },
    {
      nombre: "Nina",
      edad: "3 años",
      color: "Negro Con Blanco",
      personalidad: "Independiente",
      residencia: "Concepción",
      imagen: gato3,
    },
    {
      nombre: "Leo",
      edad: "4 años",
      color: "Gris Con Blanco",
      personalidad: "Curioso",
      residencia: "Talca",
      imagen: gato4,
    },
    {
      nombre: "Luna",
      edad: "5 años",
      color: "Atigrado",
      personalidad: "Amigable",
      residencia: "Santiago",
      imagen: gato5,
    },
    {
      nombre: "Toby",
      edad: "2 años",
      color: "Gris",
      personalidad: "Juguetón",
      residencia: "Rancagua",
      imagen: gato6,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Gatos Disponibles para Adopción</h2>
      {selectedGato ? (
        <ContactForm gato={selectedGato} />
      ) : (
        <div className="row">
          {gatos.map((gato, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card
                image={gato.imagen}
                title={gato.nombre}
                listItems={[
                  `Edad: ${gato.edad}`,
                  `Color: ${gato.color}`,
                  `Personalidad: ${gato.personalidad}`,
                  `Residencia: ${gato.residencia}`,
                ]}
                buttonLabel="Adoptar"
                onButtonClick={() => setSelectedGato(gato)} // Cambia el estado cuando se presiona el botón
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gatos;
