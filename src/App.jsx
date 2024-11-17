import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity = 1) => {
    const newItems = [];

    for (let n = 0; n < quantity; n++) {
      const itemWithKey = { ...item, key: uuidv4() };
      newItems.push(itemWithKey);
    }

    setCart((prevCart) => [...prevCart, ...newItems]);
  };

  function removeFromCart(itemId) {
    setCart(cart.filter((item) => item.key !== itemId));
  }

  function emptyCart() {
    setCart([]);
  }

  function totalPrice(cart) {
    let price;
    if (cart != []) {
      price = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    }
    return price;
  }

  return (
    <>
      <Navbar cart={cart} totalPrice={totalPrice} />
      <Outlet
        context={{ cart, addToCart, removeFromCart, emptyCart, totalPrice }}
      ></Outlet>
    </>
  );
}

export default App;
