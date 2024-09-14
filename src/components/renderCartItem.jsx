function RenderCartItem({ description, id, image, price, title }) {
  return (
    <>
      <p>{title}</p>
      <img src={image} alt={description} />
      <p>${price}</p>
    </>
  );
}

export default RenderCartItem;
