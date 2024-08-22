function NavItem({ name, link }) {
  return (
    <li id={name}>
      <a href={link}>{name}</a>
    </li>
  );
}

export default NavItem;
