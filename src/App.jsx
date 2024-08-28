import { useState } from "react";
import getItems from "./components/getItems";
import { Outlet } from "react-router-dom";
import NavItem from "./components/navItem";
import Items from "./components/items";
import "./App.css";

function App() {
  const [cart, setCart] = useState(["test"]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <nav>
        <ul>
          <NavItem name="home" link="/home"></NavItem>
          <NavItem name="shop" link="/shop"></NavItem>
          <NavItem name="cart" link="/cart"></NavItem>
        </ul>
      </nav>
      <Outlet context={{ cart, addToCart }}></Outlet>
    </>
  );
}

export default App;
