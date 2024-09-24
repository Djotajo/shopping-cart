function RenderCartItem({ id, image, price, title }) {
  return (
    <div className="cartItem">
      <p>{title}</p>
      <img src={image} alt={title} />
      <p>${price}</p>
    </div>
  );
}

export default RenderCartItem;
