// reviewActions.js

import axios from 'axios';
import {
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
  GET_PRODUCT_REVIEWS_REQUEST,
  GET_PRODUCT_REVIEWS_SUCCESS,
  GET_PRODUCT_REVIEWS_FAILURE,
  GET_REVIEW_BY_ID_REQUEST,
  GET_REVIEW_BY_ID_SUCCESS,
  GET_REVIEW_BY_ID_FAILURE,
} from './actionTypes';
import { API_BASE_URL } from '../../config/apiConfig';

const token = localStorage.getItem("jwt");

// Create Review Actions
export const createReviewRequest = (reviewData) => ({
  type: CREATE_REVIEW_REQUEST,
  payload: reviewData,
});

export const createReviewSuccess = (review) => ({
  type: CREATE_REVIEW_SUCCESS,
  payload: review,
});

export const createReviewFailure = (error) => ({
  type: CREATE_REVIEW_FAILURE,
  payload: error,
});

export const createReview = (reviewData) => {
  return async (dispatch) => {
    dispatch(createReviewRequest(reviewData));

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/review/create`,
        reviewData,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      dispatch(createReviewSuccess(data));
    } catch (error) {
      dispatch(createReviewFailure(error.message));
    }
  };
};

// Get Reviews by Product ID Actions
export const getProductReviewsRequest = (productId) => ({
  type: GET_PRODUCT_REVIEWS_REQUEST,
  payload: productId,
});

export const getProductReviewsSuccess = (reviews) => ({
  type: GET_PRODUCT_REVIEWS_SUCCESS,
  payload: reviews,
});

export const getProductReviewsFailure = (error) => ({
  type: GET_PRODUCT_REVIEWS_FAILURE,
  payload: error,
});

export const getProductReviews = (productId) => {
  return async (dispatch) => {
    dispatch(getProductReviewsRequest(productId));

    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/api/review/product/${productId}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      dispatch(getProductReviewsSuccess(data));
    } catch (error) {
      dispatch(getProductReviewsFailure(error.message));
    }
  };
};

// Get Review by ID Actions
export const getReviewByIdRequest = (reviewId) => ({
  type: GET_REVIEW_BY_ID_REQUEST,
  payload: reviewId,
});

export const getReviewByIdSuccess = (review) => ({
  type: GET_REVIEW_BY_ID_SUCCESS,
  payload: review,
});

export const getReviewByIdFailure = (error) => ({
  type: GET_REVIEW_BY_ID_FAILURE,
  payload: error,
});

export const getReviewById = (reviewId) => {
  return async (dispatch) => {
    dispatch(getReviewByIdRequest(reviewId));

    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/api/review/product/${reviewId}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      console.log("god",data)

      dispatch(getReviewByIdSuccess(data));
    } catch (error) {
      dispatch(getReviewByIdFailure(error.message));
    }
  };
};
