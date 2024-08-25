import StarRating from "./starRating";
import RatingWindow from "./ratingWindow";
import { useState } from "react";
import Modal from "./modal";

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
  const [isRatingWindowVisible, setRatingWindowVisible] = useState(false);
  const handleCloseWindow = () => {
    setRatingWindowVisible(false);
  };

  return (
    <div className="item">
      {/* <p>{category}</p> */}
      {/* <p>{description}</p> */}
      {/* <p>{id}</p> */}
      <p>{title}</p>
      <img src={image} alt={description} />
      <p>${price}</p>

      <StarRating currentRating={rating} quantity={count} />

      <button onClick={() => setRatingWindowVisible(true)}>Rate me!</button>
      {isRatingWindowVisible && (
        <Modal onClose={handleCloseWindow}>
          <RatingWindow onClose={handleCloseWindow} />
        </Modal>
      )}
    </div>
  );
}

export default RenderItem;
