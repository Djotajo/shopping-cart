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
          console.log("Before changes:", { yourRating, rated, reviewNumber });
          if (rated === false) {
            handleSetCurrentRating(rate);
            setReviewNumber(reviewNumber + 1);
            handleSetYourRating(rate);
            handleSetReviewNumber();
            handleSetRated();
          } else {
            handleSetPrevRating(yourRating);
            handleSetYourRating(rate);
            handleUpdateCurrentRating(rate);
            handleCloseUpdateWindow();
          }
          console.log("After changes:", { yourRating, rated, reviewNumber });
        }}
      />
      {!rated && <button onClick={onClose}>Cancel</button>}
      {rated && <button onClick={handleRemoveRating}>Remove rating</button>}
      {/* <button onClick={handleRemoveRating}>Remove rating</button> */}
    </div>
  );
}

export default RatingWindow;
