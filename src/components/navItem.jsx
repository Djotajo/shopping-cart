import { Link } from "react-router-dom";

function NavItem({ name, link, cart, addToCart }) {
  return (
    <li id={name}>
      <Link to={link}>{name}</Link>
    </li>
  );
}

export default NavItem;
