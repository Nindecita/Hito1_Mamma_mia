import "./App.css";
import React from "react";
import Navbar from "./componentes/Navbar";
//import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Cart from "./componentes/Cart";
//import RegisterPage from "./componentes/RegisterPage";
//import LoginPage from "./componentes/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home/>*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
