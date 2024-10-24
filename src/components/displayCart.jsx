import { useOutletContext } from "react-router-dom";
import RenderCartItem from "./renderCartItem";

import { v4 as uuidv4 } from "uuid";

function Cart() {
  const { cart } = useOutletContext();
  const { removeFromCart } = useOutletContext();
  const { emptyCart } = useOutletContext();
  const { totalPrice } = useOutletContext();

  return (
    <>
      <div className="cartContainer">
        {cart.map((item) => (
          <div className="cartItemWrapper">
            <RenderCartItem
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              key={item.key}
            />
            <button
              onClick={() => {
                console.log(item.key);
                removeFromCart(item.key);
              }}
              className="removeFromCartButton"
            >
              Remove From Cart
            </button>
          </div>
        ))}
        <div className="cartTotal">
          <p>
            Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"}): $
            {totalPrice(cart)}
          </p>
          <button
            className="checkoutButton"
            onClick={() => alert("Shopping Successful")}
          >
            Proceed to Checkout
          </button>
          <button
            disabled={cart.length === 0 ? true : false}
            id="emptyCartButton"
            onClick={() => {
              if (confirm("Are you sure") === true) {
                emptyCart();
              }
            }}
          >
            Empty cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
