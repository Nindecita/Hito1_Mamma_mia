import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatCurrency } from "../helpers/format";

import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-center fs-6">
            <Card.Text>Ingredientes</Card.Text>
          </div>
          <Card.Text>
            <div className="d-flex justify-content-center gap-1 fs-6 ">
              🍕
              <p>{ingredients.join(', ')}</p>
            </div>
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-center">
            <strong>Precio: ${formatCurrency(price)}</strong>
          </div>
          <div className="d-flex justify-content-between p-3">
            <Button className="border" variant="light">
              Ver mas 👀
            </Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
