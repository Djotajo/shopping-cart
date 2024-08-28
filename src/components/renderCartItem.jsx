function RenderCartItem({ description, id, image, price, title }) {
  return (
    <div className="item">
      <p>{title}</p>
      <img src={image} alt={description} />
      <p>${price}</p>
    </div>
  );
}

export default RenderCartItem;
