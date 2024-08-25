import Rating from "react-rating";
import { useState } from "react";

function RatingWindow({
  onClose,
  yourRating,
  handleSetYourRating,
  handleSetCurrentRating,
  currentRating,
  prevRating,
  handleUpdateCurrentRating,
  handleSetPrevRating,
  rated,
  handleSetRated,
}) {
  //   const [rating, setRating] = useState(4);
  //   const [yourRating, setYourRating] = useState(0);
  //   const [prevRating, setPrevRating] = useState(0);
  const [reviewNumber, setReviewNumber] = useState(150);
  //   const [rated, setRated] = useState(false);
  const [isRatingWindowVisible, setRatingWindowVisible] = useState(true);

  return (
    <div className="ratingWindow">
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={yourRating}
        // {rated === false ? 0 : 5}
        onChange={(rate) => {
          if (rated === false) {
            // Handle the case where rated is false
            handleSetCurrentRating(rate);
            // setRating(
            //   (currentRating * reviewNumber + rate) / (reviewNumber + 1)
            // );
            setReviewNumber(reviewNumber + 1); // Assuming this is the first rating
            handleSetRated();
            handleSetYourRating(rate);
          } else {
            handleSetPrevRating(yourRating);
            handleSetYourRating(rate);
            handleUpdateCurrentRating(rate);
            console.log(yourRating);
            // Handle the case where rated is true
            // setRating((rating * reviewNumber + rate) / (reviewNumber + 1));
            // setReviewNumber(reviewNumber + 1);
          }

          // setRating(
          //   rated === false
          //     ? rate
          //     : (rating * reviewNumber + rate) / (reviewNumber + 1)
          // );
          // setReviewNumber(rated === false ? reviewNumber : reviewNumber + 1);

          // setRated(rated ? true : false)
        }}
      />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default RatingWindow;
