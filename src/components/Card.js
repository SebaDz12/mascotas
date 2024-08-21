import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, listItems, tipo }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const route = tipo === "gato" ? "/gato" : "/perro";
    navigate(route, {
      state: {
        nombre: title,
        edad: listItems[0],
        color: listItems[1],
        personalidad: listItems[2],
        residencia: listItems[3],
        imagen: image,
      },
    });
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body" style={{ backgroundColor: "#fff" }}>
        <h5 className="card-title">{title}</h5>
        <ul className="list-unstyled">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Adoptar
        </button>
      </div>
    </div>
  );
};

export default Card;
