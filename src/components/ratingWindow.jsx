import Rating from "react-rating";
import { useState } from "react";

function RatingWindow({
  onClose,
  yourRating,
  handleSetYourRating,
  handleSetCurrentRating,
  handleUpdateCurrentRating,
  handleSetPrevRating,
  rated,
  handleSetRated,
  handleSetReviewNumber,
  handleCloseUpdateWindow,
  handleRemoveRating,
}) {
  const [reviewNumber, setReviewNumber] = useState(150);

  return (
    <div className="ratingWindow">
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={yourRating}
        onChange={(rate) => {
          if (rated === false) {
            handleSetCurrentRating(rate);
            setReviewNumber(reviewNumber + 1);
            handleSetYourRating(rate);
            handleSetReviewNumber();
            handleSetRated();
            onClose();
          } else {
            handleSetPrevRating(yourRating);
            handleSetYourRating(rate);
            handleUpdateCurrentRating(rate);
            handleCloseUpdateWindow();
          }
        }}
      />
      {rated && <button onClick={handleRemoveRating}>Remove</button>}
      {!rated && <button onClick={onClose}>Cancel</button>}
    </div>
  );
}

export default RatingWindow;
