// orderActions.js

import axios from 'axios';
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from './ActionType';
import { API_BASE_URL } from '../../config/apiConfig';
const token=localStorage.getItem("jwt")

export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/orders/create`, orderData.address, {headers: {
        "Authorization":`Bearer ${token}`
      }
    });
      if(data.id){
        orderData.navigate({search:`step=3&order_id=${data.id}`})

      }
      console.log("creat order ",data)
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};



export const getOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDER_REQUEST });

    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/orders/${orderId}`,
      {
        headers: {
        "Authorization":`Bearer ${token}`
      }
    }
      );
      console.log('item',data)

      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};
export const getOrderuser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDER_REQUEST });

    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/orders/user`,
      {
        headers: {
        "Authorization":`Bearer ${token}`
      }
    }
      );
      console.log('orderUser',data)

      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};

