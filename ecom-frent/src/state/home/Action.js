// actions.js
import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './ActionType';
import { API_BASE_URL } from '../../config/apiConfig';
const token=localStorage.getItem("jwt")

export const fetchHomeProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/products/home`,
      {
        headers: {
        "Authorization":`Bearer ${token}`
      }
    }
      );
      console.log('Response datat:', data);

      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        error: error.message,
      });
    }
  };
};
