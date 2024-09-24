import { useState } from "react";
import { useEffect } from "react";
import RenderItem from "./renderItem";
import AddToCartButton from "./addToCartButton";
import { useOutletContext } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

// async function getItems() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const responseJson = await response.json();
//   console.log(typeof responseJson);
//   return responseJson;
// }

function Items() {
  const [items, setItems] = useState([]);
  const { addToCart } = useOutletContext();

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
  //   console.log(list);
  return <div className="items">{list}</div>;
}

export default Items;

// import DisplayCard from "./displayCard";

// function DisplayDeck({
//   array,
//   shuffleDeck,
//   updatePrevCards,
//   prevCards,
//   setPrevCards,
// }) {
//   let list;
//   array
//     ? (list = array.map((item) => (
//         <DisplayCard
//           pokeID={item}
//           key={item}
//           shuffleDeck={shuffleDeck}
//           updatePrevCards={updatePrevCards}
//           prevCards={prevCards}
//           setPrevCards={setPrevCards}
//         />
//       )))
//     : null;

//   return <>{list}</>;
// }

// export default DisplayDeck;
