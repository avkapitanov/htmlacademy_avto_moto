import {CURRENCY_SYMBOL, LOCAL_STORAGE_REVIEW_NAME, LOCALE} from "./constants";
import {nanoid} from 'nanoid';
import mockReviews from "./mocks/reviews";

export const extend = (firstObj, secondObj) => {
  return Object.assign({}, firstObj, secondObj);
};

export const formatPrice = (price) => `${new Intl.NumberFormat(LOCALE).format(price)} ${CURRENCY_SYMBOL}`;

const serialize = (obj) => JSON.stringify(obj);

const deserialize = (strVal, defaultVal) => {
  if (!strVal) {
    return defaultVal;
  }

  let val;
  try {
    val = JSON.parse(strVal);
  } catch (e) {
    val = strVal;
  }

  return (val !== undefined ? val : defaultVal);
};

export const setLocalStorageParam = (key, value) => {
  localStorage.setItem(key, serialize(value));
};

export const getLocalStorageParam = (key, defaultVal = []) => {
  return deserialize(localStorage.getItem(key), defaultVal);
};

export const getAllReviews = () => {
  let addedReviews = getLocalStorageParam(LOCAL_STORAGE_REVIEW_NAME);
  return adaptReviewsToClient(addedReviews.concat(mockReviews));
};

export const addNewReviewElement = (author, dignity, disadvantages, rating, text, date) => {
  let reviews = getLocalStorageParam(LOCAL_STORAGE_REVIEW_NAME);

  const adaptedDate = date.toString();

  const addedReview = {
    id: nanoid(),
    date: adaptedDate,
    author,
    dignity,
    disadvantages,
    rating: Number.parseInt(rating, 10),
    text
  };

  reviews.unshift(addedReview);

  setLocalStorageParam(LOCAL_STORAGE_REVIEW_NAME, reviews);
  return adaptReviewToClient(addedReview);
};

export const adaptReviewsToClient = (reviews) => {
  return reviews.map(adaptReviewToClient);
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = extend({}, review);
  adaptedReview.date = new Date(Date.parse(review.date));
  return adaptedReview;
};
