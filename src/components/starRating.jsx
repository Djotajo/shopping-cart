import React, { useState } from "react";
import Rating from "react-rating";

const StarRating = ({ currentRating, quantity }) => {
  const [rating, setRating] = useState(currentRating);
  const [yourRating, setYourRating] = useState(0);
  const [prevRating, setPrevRating] = useState(0);
  const [reviewNumber, setReviewNumber] = useState(quantity);
  const [rated, setRated] = useState(false);
  console.log(reviewNumber);

  //   function changeRating(){
  //     let newRating = rating + rate
  //   }

  return (
    <div>
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={currentRating}
        // {rated === false ? 0 : 5}
        onChange={(rate) => {
          if (rated === false) {
            // Handle the case where rated is false
            setRating((rating * reviewNumber + rate) / (reviewNumber + 1));
            setReviewNumber(reviewNumber + 1); // Assuming this is the first rating
            setRated(true);
            setYourRating(rate);
          } else {
            setPrevRating(yourRating);
            setYourRating(rate);
            setRating(
              (rating * reviewNumber - prevRating + rate) / reviewNumber
            );
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
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={yourRating}
      />
      <p>Your rating: {yourRating}</p>
      <p>Total rating: {rating}</p>
      <p>{reviewNumber} reviews</p>
    </div>
  );
};

export default StarRating;

// onChange={(rate) => {
//   setRating(rated === false ? rate : (rating * reviewNumber + rate) / (reviewNumber + 1));
//   setReviewNumber(rated === false ? 1 : reviewNumber + 1);
// }}
