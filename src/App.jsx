import { useState } from "react";
import getItems from "./components/getItems";
import { Outlet } from "react-router-dom";
import NavItem from "./components/navItem";
import Items from "./components/items";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cart, setCart] = useState([]);

  // const addToCart = (item, quantity = 1) => {
  //   for (let n = 0; n < quantity; n++) {
  //     const itemWithKey = { ...item, key: uuidv4() };
  //     setCart([...cart, itemWithKey]);
  //   }
  // };

  const addToCart = (item, quantity = 1) => {
    const newItems = [];

    for (let n = 0; n < quantity; n++) {
      const itemWithKey = { ...item, key: uuidv4() };
      newItems.push(itemWithKey); // Collect items in an array
    }

    setCart((prevCart) => [...prevCart, ...newItems]); // Update cart once with all new items
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
      <nav>
        <ul>
          <li className="logo">FRIENDSHOP</li>
          <li>
            <NavItem name="home" link="/home"></NavItem>
            <NavItem name="shop" link="/shop"></NavItem>
          </li>
          <li>
            {" "}
            <NavItem name="cart" link="/cart"></NavItem>({cart.length}) $
            {totalPrice(cart)}
          </li>
        </ul>
      </nav>
      <Outlet
        context={{ cart, addToCart, removeFromCart, emptyCart, totalPrice }}
      ></Outlet>
    </>
  );
}

export default App;
