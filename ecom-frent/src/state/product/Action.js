// productActions.js

import axios from 'axios';
import {
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
  FIND_PRODUCT_FAILURE,
} from './ActionType';
import { API_BASE_URL } from '../../config/apiConfig';

const token=localStorage.getItem("jwt")


export const findProduct = (reqData) => {
  return async (dispatch) => {
    dispatch({
      type: FIND_PRODUCT_REQUEST
    });

    const {
      category,
      topLavelCat,
      color,
      size,
      minPrice,
      maxPrice,
      minDiscount,
      sort,
      stock,
      pageNumber,
      pageSize
    } = reqData;
    const queryString = `?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDescount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}&category=${category}&topLavelCat=${topLavelCat}`;


    try {
      const { data } = await axios.get(`${API_BASE_URL}/products/products${queryString}`);

      dispatch({
        type: FIND_PRODUCT_SUCCESS,
        payload: data,
      });

     
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_FAILURE,
        error: error.message,
      });
    }
  };
};




export const findProductById= (
  productId
  ) => {
    return async (dispatch) => {
      dispatch({
        type: FIND_PRODUCT_BY_ID_REQUEST
       
      });
     
     
      try {
        
        const {data} = await axios.get(`${API_BASE_URL}/products/product/id/${productId}`
       )
        
        dispatch({
          type: FIND_PRODUCT_BY_ID_SUCCESS,
          payload:data,
        });
       
      } catch (error) {
        dispatch({
          type: FIND_PRODUCT_BY_ID_FAILURE,
          error: error.message,
        });
      }
    };
  }