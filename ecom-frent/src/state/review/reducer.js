// reviewReducer.js

import * as actionTypes from './actionTypes';

const initialState = {
  creatingReview: false,
  gettingProductReviews: false,
  getReviewById: false,
  reviews: [],
  currentReview: null,
  error: null,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    // Create Review Cases
    case actionTypes.CREATE_REVIEW_REQUEST:
      return {
        ...state,
        creatingReview: true,
      };
    case actionTypes.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        creatingReview: false,
        reviews: [...state.reviews, action.payload],
        error: null,
      };
    case actionTypes.CREATE_REVIEW_FAILURE:
      return {
        ...state,
        creatingReview: false,
        error: action.payload,
      };

    // Get Reviews by Product ID Cases
    case actionTypes.GET_PRODUCT_REVIEWS_REQUEST:
      return {
        ...state,
        gettingProductReviews: true,
      };
    case actionTypes.GET_PRODUCT_REVIEWS_SUCCESS:
      return {
        ...state,
        gettingProductReviews: false,
        reviews: action.payload,
        error: null,
      };
    case actionTypes.GET_PRODUCT_REVIEWS_FAILURE:
      return {
        ...state,
        gettingProductReviews: false,
        error: action.payload,
      };

    // Get Review by ID Cases
    case actionTypes.GET_REVIEW_BY_ID_REQUEST:
      return {
        ...state,
        getReviewById: true,
      };
    case actionTypes.GET_REVIEW_BY_ID_SUCCESS:
      return {
        ...state,
        getReviewById: action.payload,
        currentReview: false,
        error: null,
      };
    case actionTypes.GET_REVIEW_BY_ID_FAILURE:
      return {
        ...state,
        getReviewById: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reviewReducer;
