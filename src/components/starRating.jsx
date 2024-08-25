import React, { useState } from "react";
import Rating from "react-rating";
import RatingWindow from "./ratingWindow";

const StarRating = ({ currentRating, quantity }) => {
  const [rating, setRating] = useState(currentRating);
  const [yourRating, setYourRating] = useState(0);
  const [prevRating, setPrevRating] = useState(0);
  const [reviewNumber, setReviewNumber] = useState(quantity);
  const [rated, setRated] = useState(false);
  const displayRatingWindow = document.querySelector(".ratingWindow");
  const [isRatingWindowVisible, setRatingWindowVisible] = useState(false);
  console.log(reviewNumber);

  //   function changeRating(){
  //     let newRating = rating + rate
  //   }

  return (
    <div className="rating">
      <div className="generalRating">
        <span className="fa fa-star"></span>
        <span>{`${rating.toFixed(1)} / 5`}</span>
        <br />
        <span>{reviewNumber}</span>
      </div>
      <div className="yourRating">
        <span className="fa fa-star-o"></span>
        <span>{`${yourRating} / 5`}</span>
      </div>
      {/* <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={currentRating}
        onChange={(rate) => {
          if (rated === false) {
            setRating((rating * reviewNumber + rate) / (reviewNumber + 1));
            setReviewNumber(reviewNumber + 1);
            setRated(true);
            setYourRating(rate);
          } else {
            setPrevRating(yourRating);
            setYourRating(rate);
            setRating(
              (rating * reviewNumber - prevRating + rate) / reviewNumber
            );
          }
        }}
      /> */}
      {/* <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
        initialRating={yourRating}
      />
      <p>Your rating: {yourRating}</p> */}
    </div>
  );
};

export default StarRating;

// onChange={(rate) => {
//   setRating(rated === false ? rate : (rating * reviewNumber + rate) / (reviewNumber + 1));
//   setReviewNumber(rated === false ? 1 : reviewNumber + 1);
// }}
