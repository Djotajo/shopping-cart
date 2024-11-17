export default async function getItems() {
  const response = await fetch("https://fakestoreapi.com/products");
  const responseJson = await response.json();
  return responseJson;
}
