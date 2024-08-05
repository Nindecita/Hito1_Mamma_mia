import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { detailPizza } from "../details";

function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {detailPizza.map((d, index) => (
          <CardPizza
            key={index}
            name={d.name}
            price={d.price}
            ingredients={d.ingredients}
            img={d.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
