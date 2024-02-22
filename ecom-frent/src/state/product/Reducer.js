// productReducer.js

import {
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_SUCCESS,
  FIND_PRODUCT_REQUEST,
} from './ActionType';

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: action.payload,
        error:null
      };
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
          error:null
        };
     
    case FIND_PRODUCT_BY_ID_FAILURE:
    case FIND_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productReducer;
