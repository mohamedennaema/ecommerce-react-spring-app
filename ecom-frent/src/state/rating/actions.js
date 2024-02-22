// ratingActions.js

import axios from 'axios';
import {
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  GET_PRODUCT_RATINGS_REQUEST,
  GET_PRODUCT_RATINGS_SUCCESS,
  GET_PRODUCT_RATINGS_FAILURE,
} from './actionTypes';
import { API_BASE_URL } from '../../config/apiConfig';

const token = localStorage.getItem("jwt");

// Create Rating Actions
export const createRatingRequest = (ratingData) => ({
  type: CREATE_RATING_REQUEST,
  payload: ratingData,
});

export const createRatingSuccess = (rating) => ({
  type: CREATE_RATING_SUCCESS,
  payload: rating,
});

export const createRatingFailure = (error) => ({
  type: CREATE_RATING_FAILURE,
  payload: error,
});

export const createRating = (ratingData) => {
  return async (dispatch) => {
    dispatch(createRatingRequest(ratingData));

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/rating/create`,
        ratingData,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      dispatch(createRatingSuccess(data));
    } catch (error) {
      dispatch(createRatingFailure(error.message));
    }
  };
};

// Get Ratings by Product ID Actions
export const getProductRatingsRequest = (productId) => ({
  type: GET_PRODUCT_RATINGS_REQUEST,
  payload: productId,
});

export const getProductRatingsSuccess = (ratings) => ({
  type: GET_PRODUCT_RATINGS_SUCCESS,
  payload: ratings,
});

export const getProductRatingsFailure = (error) => ({
  type: GET_PRODUCT_RATINGS_FAILURE,
  payload: error,
});

export const getProductRatings = (productId) => {
  return async (dispatch) => {
    dispatch(getProductRatingsRequest(productId));

    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/api/rating/product/${productId}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      dispatch(getProductRatingsSuccess(data));
    } catch (error) {
      dispatch(getProductRatingsFailure(error.message));
    }
  };
};
