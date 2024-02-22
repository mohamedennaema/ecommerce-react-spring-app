// cartReducer.js

import { act } from '@testing-library/react';
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

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
  cart:null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.carditems ,action.payload.carditems],// Assuming the payload is the updated cart items array
        loading: false,
      };
    case REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload, // Assuming the payload is the updated cart items array after removal
        loading: false,
      };

      case GET_CART_REQUEST:
        return {
          ...state,
          loading: true,
          error:null
        };

    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.carditems, // Assuming the payload is the fetched cart items array
        loading: false,
        cart:action.payload
      };
      case GET_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error:action.payload
      };


    case UPDATE_CART_ITEM_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:

      return {
        ...state,
        loading: true, 
        error:null
      };
      case REMOVE_CART_ITEM_SUCCESS:

      return {
        ...state,
        carditems:action.payload,
        loading: false, 
      };
      case UPDATE_CART_ITEM_SUCCESS:

      return {
        ...state,
        carditems:action.payload,
        loading: false, 
      };
    
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
