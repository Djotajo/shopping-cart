// export default function getItems() {
//   const items = fetch("https://fakestoreapi.com/products").then((res) =>
//     res.json()
//   );
//   // .then((json) => console.log(json));

//   return items;
// }

export default async function getItems() {
  const response = await fetch("https://fakestoreapi.com/products");
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
}
