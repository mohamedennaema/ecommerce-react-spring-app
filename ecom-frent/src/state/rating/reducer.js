// ratingReducer.js

import * as actionTypes from './actionTypes';

const initialState = {
  creatingRating: false,
  gettingProductRatings: false,
  ratings: [],
  error: null,
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    // Create Rating Cases
    case actionTypes.CREATE_RATING_REQUEST:
      return {
        ...state,
        creatingRating: true,
      };
    case actionTypes.CREATE_RATING_SUCCESS:
      return {
        ...state,
        creatingRating: false,
        ratings: [...state.ratings, action.payload],
        error: null,
      };
    case actionTypes.CREATE_RATING_FAILURE:
      return {
        ...state,
        creatingRating: false,
        error: action.payload,
      };

    // Get Ratings by Product ID Cases
    case actionTypes.GET_PRODUCT_RATINGS_REQUEST:
      return {
        ...state,
        gettingProductRatings: true,
      };
    case actionTypes.GET_PRODUCT_RATINGS_SUCCESS:
      return {
        ...state,
        gettingProductRatings: false,
        ratings: action.payload,
        error: null,
      };
    case actionTypes.GET_PRODUCT_RATINGS_FAILURE:
      return {
        ...state,
        gettingProductRatings: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ratingReducer;
