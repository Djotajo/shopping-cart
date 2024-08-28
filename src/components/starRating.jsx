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
  isUpdateRatingWindowVisible,
  handleOpenUpdateWindow,
  handleCloseUpdateWindow,
  handleSetReviewNumber,
  handleRemoveRating,
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
                handleSetReviewNumber={handleSetReviewNumber}
                handleRemoveRating={handleRemoveRating}
              />
            </Modal>
          )}
        </>
      ) : (
        <>
          <button className="yourRating" onClick={handleOpenUpdateWindow}>
            <span className="fa fa-star-o"></span>
            <span>{`${yourRating} / 5`}</span>
          </button>
          {isUpdateRatingWindowVisible && (
            <Modal onClose={handleCloseUpdateWindow}>
              <RatingWindow
                yourRating={yourRating}
                handleSetYourRating={handleSetYourRating}
                handleSetCurrentRating={handleSetCurrentRating}
                currentRating={currentRating}
                prevRating={prevRating}
                handleUpdateCurrentRating={handleUpdateCurrentRating}
                handleSetPrevRating={handleSetPrevRating}
                rated={rated}
                handleSetRated={handleSetRated}
                handleCloseUpdateWindow={handleCloseUpdateWindow}
                handleRemoveRating={handleRemoveRating}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default StarRating;
