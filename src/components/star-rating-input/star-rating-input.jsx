import React from "react";
import {MAX_RATING_VALUE} from "../../constants";
import {ReactComponent as Star} from "../../img/icon-form-star.svg";
import PropTypes from "prop-types";

const StarRatingInput = (props) => {
  const {onChangeHandler} = props;

  return (
    <div className="review-form__rating review-rating">
      <span className="review-rating__title">Оцените товар:</span>
      <div className="review-rating__stars">
        {[...Array(MAX_RATING_VALUE).keys()].reverse().map((numb) => {
          const value = ++numb;
          return (
            <React.Fragment key={`star-${numb}`}>
              <input className="review-rating__input" id={`form-rating-${numb}`} type="radio" name="rating" value={value} onChange={onChangeHandler}/>
              <label className="review-rating__label" htmlFor={`form-rating-${numb}`}>
                <Star className="review-rating__star"/>
              </label>
            </React.Fragment>
          );
        })
        }
      </div>
    </div>
  );
};

StarRatingInput.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
};

export default StarRatingInput;
