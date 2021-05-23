import React from "react";
import PropTypes from "prop-types";
import {MAX_RATING_VALUE, RatingText} from "../../constants";
import {ReactComponent as Star} from "../../img/icon-star.svg";

const StarRating = (props) => {
  const {rating} = props;

  return (
    <div className="product-review__rating rating">
      <div className="rating__stars">
        {[...Array(MAX_RATING_VALUE).keys()].map((numb) => {
          const value = ++numb;
          return (
            <React.Fragment key={`star-${numb}`}>
              <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={value === rating} readOnly/>
              <label className="rating__label" htmlFor={`star-${value}`}>
                <Star className={`rating__star ${value <= rating ? `rating__star--active` : ``}`}/>
              </label>
            </React.Fragment>
          );
        })
        }
        <span className="rating__text">
          {RatingText[rating]}
        </span>
      </div>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
