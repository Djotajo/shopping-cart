import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function AddToCartButton({ addItem }) {
  const { addToCart } = useOutletContext();

  let [quantity, setQuantity] = useState(1);

  // const handleInputChange = () => {
  //   let quantityInput = document.getElementById(addItem.id);
  //   setQuantity(quantityInput.value);
  // };

  const handleInputChange = (event) => {
    setQuantity(event.target.value); // Directly update state from input change
  };

  const onClick = () => {
    addToCart(addItem, quantity);
  };
  return (
    <>
      <div className="quantityDiv">
        {" "}
        <label htmlFor={addItem.id}>Quantity: </label>
        <input
          type="number"
          id={addItem.id}
          name="quantity"
          min="1"
          max="100"
          value={quantity}
          onChange={handleInputChange}
          className="quantityInput"
        />
      </div>

      <button onClick={onClick} className="addToCartButton">
        Add to cart
      </button>
    </>
  );
}

export default AddToCartButton;
