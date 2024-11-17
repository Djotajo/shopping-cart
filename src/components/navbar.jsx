import React, { useState } from "react";
import NavItem from "./navItem";
import Footer from "./footer";

const Navbar = ({ cart, totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="heroLogo">
        <h1 className="logo">FRIENDSHOP</h1>
        <h2>
          <Footer></Footer>
        </h2>
      </div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li className="nav-links">
          <NavItem name="home" link="/home" toggleMenu={toggleMenu} />
          <NavItem name="shop" link="/shop" toggleMenu={toggleMenu} />
        </li>
        <li className="cart">
          <NavItem name="cart" link="/cart" toggleMenu={toggleMenu} />{" "}
          <p>
            ({cart.length}) ${totalPrice(cart)}
          </p>
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
