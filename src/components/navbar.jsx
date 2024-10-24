import React, { useState } from "react";
import NavItem from "./navItem";

const Navbar = ({ cart, totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">FRIENDSHOP</div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li className="nav-links">
          <NavItem name="home" link="/home" />
          <NavItem name="shop" link="/shop" />
        </li>
        <li className="cart">
          <NavItem name="cart" link="/cart" /> ({cart.length}) $
          {totalPrice(cart)}
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
