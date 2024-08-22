import React, { useState } from "react";
import Rating from "react-rating";

const StarRating = ({ currentRating, quantity }) => {
  const [rating, setRating] = useState(currentRating);
  const [yourRating, setYourRating] = useState(0);
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
        onChange={(rate) => {
          setRating((rating * reviewNumber + rate) / (reviewNumber + 1));
          setReviewNumber(reviewNumber + 1);
        }}
      />
      <p>Your rating: {yourRating}</p>
      <p>Total rating: {rating}</p>
      <p>{reviewNumber} reviews</p>
    </div>
  );
};

export default StarRating;
