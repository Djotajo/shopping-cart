import Items from "./items";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const { cart } = useOutletContext();
  console.log(cart);
  return (
    <>
      <Items />
    </>
  );
}

export default Shop;
