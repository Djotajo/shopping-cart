import React, { useState } from "react";
import Rating from "react-rating";
import RatingWindow from "./ratingWindow";
import Modal from "./modal";

const StarRating = ({
  currentRating,
  quantity,
  handleCloseWindow,
  handleOpenWindow,
  isRatingWindowVisible,
  rated,
  yourRating,
  prevRating,
  handleSetYourRating,
  handleSetCurrentRating,
  handleUpdateCurrentRating,
  handleSetPrevRating,
  handleSetRated,
}) => {
  return (
    <div className="rating">
      <div className="generalRating">
        <span className="fa fa-star"></span>
        <span>{`${currentRating.toFixed(1)} / 5`}</span>
        <br />
        <span>{quantity}</span>
      </div>
      {rated === false ? (
        <>
          <button className="rateButton" onClick={handleOpenWindow}>
            <span className="fa fa-star-o"></span>Rate
          </button>
          {isRatingWindowVisible && (
            <Modal onClose={handleCloseWindow}>
              <RatingWindow
                onClose={handleCloseWindow}
                yourRating={yourRating}
                handleSetYourRating={handleSetYourRating}
                handleSetCurrentRating={handleSetCurrentRating}
                currentRating={currentRating}
                prevRating={prevRating}
                handleUpdateCurrentRating={handleUpdateCurrentRating}
                handleSetPrevRating={handleSetPrevRating}
                rated={rated}
                handleSetRated={handleSetRated}
              />
            </Modal>
          )}
        </>
      ) : (
        <>
          <button className="yourRating" onClick={handleOpenWindow}>
            <span className="fa fa-star-o"></span>
            <span>{`${yourRating} / 5`}</span>
          </button>
          {/* {isRatingWindowVisible && (
          <Modal onClose={handleCloseWindow}>
            <RatingWindow
              onClose={handleCloseWindow}
              yourRating={yourRating}
              handleSetYourRating={handleSetYourRating}
              handleSetCurrentRating={handleSetCurrentRating}
              currentRating={currentRating}
              prevRating={prevRating}
              handleUpdateCurrentRating={handleUpdateCurrentRating}
              handleSetPrevRating={handleSetPrevRating}
              rated={rated}
              handleSetRated={handleSetRated}
            />
          </Modal>
        )} */}
        </>
      )}
      {/* <div className="yourRating">
        <span className="fa fa-star-o"></span>
        <span>{`${yourRating} / 5`}</span>
      </div> */}
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
