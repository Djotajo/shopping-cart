import { Link } from "react-router-dom";

function NavItem({ name, link, toggleMenu, cart, addToCart }) {
  return (
    <li id={name}>
      <Link to={link} onClick={toggleMenu}>
        {name}
      </Link>
    </li>
  );
}

export default NavItem;
