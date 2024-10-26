import React, { useState } from "react";
import NavItem from "./navItem";

const Navbar = ({ cart, totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <h1 className="logo">FRIENDSHOP</h1>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li className="nav-links">
          <NavItem name="home" link="/home" toggleMenu={toggleMenu} />
          <NavItem name="shop" link="/shop" toggleMenu={toggleMenu} />
        </li>
        <li className="cart">
          <NavItem name="cart" link="/cart" toggleMenu={toggleMenu} /> (
          {cart.length}) ${totalPrice(cart)}
        </li>
      </ul>

      {/* Hamburger menu button for mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
