import { useOutletContext } from "react-router-dom";
import RenderCartItem from "./renderCartItem";

import { v4 as uuidv4 } from "uuid";

function Cart() {
  const { cart } = useOutletContext();
  const { removeFromCart } = useOutletContext();
  const { emptyCart } = useOutletContext();
  return (
    <>
      {/* <h2 className="cartTitle"> Your Cart</h2>
      <button onClick={emptyCart}>Empty Cart</button> */}

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
      </div>
    </>
  );
}

export default Cart;
