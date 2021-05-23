import {CURRENCY_SYMBOL, LOCAL_STORAGE_REVIEW_NAME, LOCALE} from "./constants";
import {nanoid} from 'nanoid';

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

export const addNewReviewElement = (author, dignity, disadvantages, rating, text, date) => {
  let reviews = getLocalStorageParam(LOCAL_STORAGE_REVIEW_NAME);

  const adaptedDate = date.toString();

  reviews.unshift({
    id: nanoid(),
    date: adaptedDate,
    author,
    dignity,
    disadvantages,
    rating: Number.parseInt(rating, 10),
    text
  });

  setLocalStorageParam(LOCAL_STORAGE_REVIEW_NAME, reviews);
  return reviews;
};
