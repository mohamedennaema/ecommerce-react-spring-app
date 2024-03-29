// cartActions.js

import axios from 'axios';
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
} from './ActionType';
import { API_BASE_URL } from '../../config/apiConfig';
const token=localStorage.getItem("jwt")

export const addItemToCart = (requestData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    

    try {
      const { data } = await axios.put(`${API_BASE_URL}/api/card/add`, requestData,{
        headers: {
          "Authorization":`Bearer ${token}`
        }
      });
      console.log("add item to card",data)

      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ITEM_TO_CART_FAILURE,
        error: error.message,
      });
    }
  };
};

export const removeCartItem = (itemId) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
      const { data } = await axios.delete(`${API_BASE_URL}/api/carditems/remove/${itemId}`,  {
        headers: {
          "Authorization":`Bearer ${token}`
        }
      });
      console.log("remove carditem",data)

      dispatch({
        type: REMOVE_CART_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_CART_ITEM_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });

    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/card`,
      {
        headers: {
          "Authorization":`Bearer ${token}`
        }
      }
      );
      console.log(data)
      dispatch({
        type: GET_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CART_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateCartItem = (requestData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
      const { data } = await axios.put(`${API_BASE_URL}/api/carditems/update/${requestData.cardItemId}`, requestData.items,  {
        headers: {
          "Authorization":`Bearer ${token}`
        }
      });
      console.log("update",data)

      dispatch({
        type: UPDATE_CART_ITEM_SUCCESS,
        payload:data
        
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CART_ITEM_FAILURE,
        error: error.message,
      });
    }
  };
};
 