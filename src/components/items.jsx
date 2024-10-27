import { useState } from "react";
import { useEffect } from "react";
import RenderItem from "./renderItem";
import AddToCartButton from "./addToCartButton";

import { v4 as uuidv4 } from "uuid";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json();
      setItems(responseJson);
    };

    getItems();
  }, []);

  let list;
  items
    ? (list = items.map((item) => (
        <div className="item">
          <RenderItem
            category={item.category}
            id={item.id}
            image={item.image}
            price={item.price}
            rating={item.rating.rate}
            count={item.rating.count}
            title={item.title}
            key={uuidv4()}
          />
          <AddToCartButton addItem={item} />
        </div>
      )))
    : null;
  return <div className="items">{list}</div>;
}

export default Items;
