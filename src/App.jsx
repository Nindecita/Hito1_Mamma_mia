import "./App.css";
import React, { useState } from "react";
import Navbar from "./componentes/Navbar";
//import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Cart from "./componentes/Cart";
//import RegisterPage from "./componentes/RegisterPage";
//import LoginPage from "./componentes/LoginPage";

function App() {
  const [cart, setCart] = useState([]);
  // Función para agregar un producto al carrito
  const addCart = (product) => {
    const searchProduct = cart.find((p) => p.id === product.id);
    if (searchProduct) {
      // Si el producto ya está en el carrito, solo actualizamos la cantidad
      const updateProduct =  cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updateProduct)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  };
  return (
    <>
      <Navbar />
      {/*<Home/>*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      <Cart cart={cart} />
      <Footer />
    </>
  );
}

export default App;
