import { useOutletContext } from "react-router-dom";

function AddToCartButton({ addItem }) {
  const { addToCart } = useOutletContext();

  const onClick = () => {
    addToCart(addItem);
  };
  return <button onClick={onClick}>Add to cart</button>;
}

export default AddToCartButton;
