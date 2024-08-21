import React from "react";
import Card from "../components/Card"; // Asegúrate de que la ruta sea correcta
import perro1 from "../pages/assets/perro1.png";
import perro2 from "../pages/assets/perro2.png";
import perro3 from "../pages/assets/perro3.png";
import perro4 from "../pages/assets/perro4.png"; // Nuevas imágenes
import perro5 from "../pages/assets/perro5.png"; // Nuevas imágenes
import perro6 from "../pages/assets/perro6.png"; // Nuevas imágenes
import "../components/Perros.css"; // Asegúrate de que la ruta sea correcta

const perros = [
  {
    nombre: "Perseo",
    edad: "3 años",
    color: "Dorado",
    personalidad: "Amigable",
    residencia: "Talca",
    imagen: perro1,
  },
  {
    nombre: "Apolo",
    edad: "1 año",
    color: "Dorado y blanco",
    personalidad: "Amigable",
    residencia: "Talca",
    imagen: perro2,
  },
  {
    nombre: "Max",
    edad: "5 años",
    color: "Negro y blanco",
    personalidad: "Amigable",
    residencia: "Talca",
    imagen: perro3,
  },

  {
    nombre: "Rocky",
    edad: "2 años",
    color: "Negro",
    personalidad: "Protector",
    residencia: "Santiago",
    imagen: perro4,
  },
  {
    nombre: "Zeus",
    edad: "4 años",
    color: "Cafe con manchas",
    personalidad: "Cariñoso",
    residencia: "Concepción",
    imagen: perro5,
  },
  {
    nombre: "Lucky",
    edad: "3 años",
    color: "Marrón",
    personalidad: "Juguetón",
    residencia: "Valparaíso",
    imagen: perro6,
  },
];

const Mascotas = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Perros Disponibles para Adopción</h2>
      <div className="row">
        {perros.map((perro, index) => (
          <div className="col-md-4" key={index}>
            <Card
              image={perro.imagen}
              title={perro.nombre}
              listItems={[
                `Edad: ${perro.edad}`,
                `Color: ${perro.color}`,
                `Personalidad: ${perro.personalidad}`,
                `Residencia: ${perro.residencia}`,
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mascotas;
