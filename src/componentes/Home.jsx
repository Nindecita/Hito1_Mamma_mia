import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
        <h1>Ingredientes:</h1>

        {pizzas.map((p) => (
          <CardPizza
            key={p.id}
            desc={p.desc}
            img={p.img}
            ingredients={p.ingredients}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
