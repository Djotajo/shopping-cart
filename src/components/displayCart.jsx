import { useOutletContext } from "react-router-dom";
import RenderCartItem from "./renderCartItem";

import { v4 as uuidv4 } from "uuid";

function Cart() {
  const { cart } = useOutletContext();
  const { removeFromCart } = useOutletContext();
  const { emptyCart } = useOutletContext();
  return (
    <div className="cartContainer">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cart.map((item) => (
            <>
              <RenderCartItem
                description={item.description}
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
              >
                Remove From Cart
              </button>
            </>
          ))}
        </li>
      </ul>
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  );
}

export default Cart;
