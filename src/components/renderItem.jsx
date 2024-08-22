import StarRating from "./starRating";

function RenderItem({
  category,
  description,
  id,
  image,
  price,
  rating,
  count,
  title,
}) {
  return (
    <div className="item">
      {/* <p>{category}</p> */}
      {/* <p>{description}</p> */}
      {/* <p>{id}</p> */}
      <p>{title}</p>
      <img src={image} alt={description} />
      <p>${price}</p>

      <StarRating currentRating={rating} quantity={count} />
    </div>
  );
}

export default RenderItem;
