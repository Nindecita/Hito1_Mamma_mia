import "./App.css";
import React from "react";
import Navbar from "./componentes/Navbar";
//import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
//import Cart from "./componentes/Cart";
//import RegisterPage from "./componentes/RegisterPage";
//import LoginPage from "./componentes/LoginPage";
import Pizzas from "./componentes/Pizzas";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/*<Cart />*/}
      <Pizzas />
      <Footer />
    </>
  );
}

export default App;
