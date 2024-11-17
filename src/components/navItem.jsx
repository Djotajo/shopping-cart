import { Link } from "react-router-dom";

function NavItem({ name, link, toggleMenu }) {
  return (
    <p id={name}>
      <Link to={link} onClick={toggleMenu}>
        {name}
      </Link>
    </p>
  );
}

export default NavItem;
