import {addReview, loadProduct, loadReviews} from "./action";
import product from "../mocks/product";
import {DELAY_BEFORE_MOCK_LOAD} from "../constants";
import reviews from "../mocks/reviews";
import {addNewReviewElement} from "../utils";

export const fetchProduct = () => (dispatch, _getState, _api) => {
  setTimeout(() => {
    dispatch(loadProduct(product));
  }, DELAY_BEFORE_MOCK_LOAD);
};

export const fetchReviews = () => (dispatch, _getState, _api) => {
  dispatch(loadReviews(reviews));
};

export const addReviewToProduct = (author, dignity, disadvantages, rating, text, date, callback) => (dispatch, _getState, _api) => {
  const addedReviews = addNewReviewElement(author, dignity, disadvantages, rating, text, date);
  dispatch(addReview(addedReviews.concat(reviews)));
  callback();
};
