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

  const [currentRating, setcurrentRating] = useState(rating);
  const [yourRating, setYourRating] = useState(0);
  const [prevRating, setPrevRating] = useState(0);
  const [reviewNumber, setReviewNumber] = useState(count);
  const [rated, setRated] = useState(false);

  const handleCloseWindow = () => {
    setRatingWindowVisible(false);
  };

  const handleOpenWindow = () => {
    setRatingWindowVisible(true);
  };

  const handleSetRated = () => {
    setRated(true);
  };

  const handleSetCurrentRating = (rating) => {
    setcurrentRating(
      (currentRating * reviewNumber + rating) / (reviewNumber + 1)
    );
  };

  const handleUpdateCurrentRating = (rating) => {
    setcurrentRating(
      (currentRating * reviewNumber - prevRating + rating) / reviewNumber
    );
  };

  const handleSetYourRating = (rating) => {
    setYourRating(rating);
  };

  const handleSetPrevRating = (rating) => {
    setPrevRating(rating);
  };

  return (
    <div className="item">
      <p>{title}</p>
      <img src={image} alt={description} />
      <p>${price}</p>

      <StarRating
        currentRating={currentRating}
        quantity={reviewNumber}
        rated={rated}
        handleCloseWindow={handleCloseWindow}
        handleOpenWindow={handleOpenWindow}
        isRatingWindowVisible={isRatingWindowVisible}
        yourRating={yourRating}
        prevRating={prevRating}
        handleSetYourRating={handleSetYourRating}
        handleSetCurrentRating={handleSetCurrentRating}
        handleUpdateCurrentRating={handleUpdateCurrentRating}
        handleSetPrevRating={handleSetPrevRating}
        handleSetRated={handleSetRated}
      />
    </div>
  );
}

export default RenderItem;
