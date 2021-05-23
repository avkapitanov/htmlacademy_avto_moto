export const ActionType = {
  LOAD_PRODUCT: `LOAD_PRODUCT`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`,
};

export const loadProduct = (product) => ({
  type: ActionType.LOAD_PRODUCT,
  payload: product,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const addReview = (reviews) => ({
  type: ActionType.ADD_REVIEW,
  payload: reviews,
});
