import "./App.css";
import React from "react";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import RegisterPage from "./componentes/RegisterPage";
import LoginPage from "./componentes/LoginPage";

function App() {
  return (
    <div>
      <Navbar />
      {/*<Home />
      <RegisterPage />*/}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
