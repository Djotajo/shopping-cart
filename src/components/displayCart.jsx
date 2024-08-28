import { useOutletContext } from "react-router-dom";
import RenderCartItem from "./renderCartItem";

function Cart() {
  const { cart } = useOutletContext();
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cart.map((item, key) => (
            <RenderCartItem
              description={item.description}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              key={item.id}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Cart;
