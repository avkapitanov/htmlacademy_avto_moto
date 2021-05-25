import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  product: null,
  reviews: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCT:
      return extend(state, {
        product: action.payload
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: action.payload
      });
  }

  return state;
};

export {data};
