// orderReducer.js

import { act } from 'react-dom/test-utils';
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from './ActionType';

const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
      
        loading: true,
       
      };
    case CREATE_ORDER_SUCCESS:
      return {
        
        order: action.payload, // Assuming the payload is the newly created order
        loading: false,
        success:true
      };
      case CREATE_ORDER_FAILURE:
        return {
          
          
          loading: false,
          error:action.payload
        };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        error:null,
        loading: true
      };
      case GET_ORDER_SUCCESS:
      return {
       ...state,
        order: action.payload, // Assuming the payload is the fetched order
        loading: false,
        error:null
      };
   
    case GET_ORDER_FAILURE:
      return {
       ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default orderReducer;
