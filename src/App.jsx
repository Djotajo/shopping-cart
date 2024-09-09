import { useState } from "react";
import getItems from "./components/getItems";
import { Outlet } from "react-router-dom";
import NavItem from "./components/navItem";
import Items from "./components/items";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

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
      <nav>
        <ul>
          <NavItem name="home" link="/home"></NavItem>
          <NavItem name="shop" link="/shop"></NavItem>
          <NavItem name="cart" link="/cart"></NavItem>({cart.length}) $
          {totalPrice(cart)}
        </ul>
      </nav>
      <Outlet context={{ cart, addToCart, emptyCart }}></Outlet>
      <footer></footer>
    </>
  );
}

export default App;
