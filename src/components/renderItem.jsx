import StarRating from "./starRating";
import { useState } from "react";

function RenderItem({ id, image, price, rating, count, title }) {
  const [isRatingWindowVisible, setRatingWindowVisible] = useState(false);
  const [isUpdateRatingWindowVisible, setUpdateRatingWindowVisible] =
    useState(false);

  const [currentRating, setcurrentRating] = useState(rating);
  const [yourRating, setYourRating] = useState(0);
  const [prevRating, setPrevRating] = useState(0);
  const [reviewNumber, setReviewNumber] = useState(count);
  const [rated, setRated] = useState(false);

  const handleRemoveRating = () => {
    setRated(false);
    setcurrentRating(rating);
    setReviewNumber(count);
    handleCloseWindow();
    handleCloseUpdateWindow();
  };

  const handleCloseWindow = () => {
    setRatingWindowVisible(false);
  };

  const handleOpenWindow = () => {
    setRatingWindowVisible(true);
  };

  const handleCloseUpdateWindow = () => {
    setUpdateRatingWindowVisible(false);
  };

  const handleOpenUpdateWindow = () => {
    setUpdateRatingWindowVisible(true);
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

  const handleSetReviewNumber = () => {
    setReviewNumber(reviewNumber + 1);
  };

  return (
    <>
      <p title={title}>{title}</p>
      <img src={image} alt={title} />
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
        isUpdateRatingWindowVisible={isUpdateRatingWindowVisible}
        handleCloseUpdateWindow={handleCloseUpdateWindow}
        handleOpenUpdateWindow={handleOpenUpdateWindow}
        handleSetReviewNumber={handleSetReviewNumber}
        handleRemoveRating={handleRemoveRating}
      />
    </>
  );
}

export default RenderItem;
