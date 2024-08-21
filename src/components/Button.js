import React from "react";
import { Card, Button } from "react-bootstrap";

const MascotaCard = ({
  nombre,
  edad,
  color,
  personalidad,
  residencia,
  imagen,
}) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Edad: {edad} <br />
          Color: {color} <br />
          Personalidad: {personalidad} <br />
          Residencia: {residencia}
        </Card.Text>
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
    </Card>
  );
};

export default MascotaCard;
