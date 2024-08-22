import { useState } from "react";
import { useEffect } from "react";
import RenderItem from "./renderItem";

// async function getItems() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const responseJson = await response.json();
//   console.log(typeof responseJson);
//   return responseJson;
// }

function Items() {
  const [items, setItems] = useState([]);
  console.log(items);

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
        <RenderItem
          category={item.category}
          description={item.description}
          id={item.id}
          image={item.image}
          price={item.price}
          rating={item.rating.rate}
          count={item.rating.count}
          title={item.title}
          key={item.id}
        />
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
