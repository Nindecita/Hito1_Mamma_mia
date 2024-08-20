import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatCurrency } from "../helpers/format";
import { nanoid } from "nanoid";
import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <hr />
              <div className="d-flex justify-content-center fs-6">
                <Card.Text>Ingredientes</Card.Text>
              </div>
              <Card.Text className="d-flex justify-content-center gap-1 fs-6">
                🍕
                <ul
                  className="d-flex gap-2"
                  style={{ listStyleType: "none", padding: 0 }}
                >
                  {ingredients.map((i) => (
                    <li key={nanoid()}>{i}</li>
                  ))}
                </ul>
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
      </div>
    </div>
  );
};

export default CardPizza;
