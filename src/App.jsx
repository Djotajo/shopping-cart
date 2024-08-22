import { useState } from "react";
import getItems from "./components/getItems";
import NavItem from "./components/navItem";
import Items from "./components/items";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <NavItem name="home" link="/home"></NavItem>
          <NavItem name="shop" link="/shop"></NavItem>
          <NavItem name="cart" link="/cart"></NavItem>
        </ul>
      </nav>
      <Items />
    </>
  );
}

export default App;
