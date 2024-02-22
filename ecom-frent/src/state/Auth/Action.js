




  // action.js
import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from './ActionType';
import { API_BASE_URL } from '../../config/apiConfig';
import { LOUGOUT } from './ActionType';
const token=localStorage.getItem("jwt")
export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = (userData) => ({ type: REGISTER_SUCCESS, payload: userData });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (userData) => ({ type: LOGIN_SUCCESS, payload: userData });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const userRequest = () => ({ type: USER_REQUEST });
export const userSuccess = (userData) => ({ type: USER_SUCCESS, payload: userData });
export const userFailure = (error) => ({ type: USER_FAILURE, payload: error });

export const register = (userData) => {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
      const user=response.data
      if(user.jwt){
        localStorage.setItem("jwt",user.jwt)
      }
      console.log(user)
      dispatch(registerSuccess(response.data));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, credentials);
      const user=response.data
      if(user.jwt){
        localStorage.setItem("jwt",user.jwt)
      }
      console.log(user)
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

export const fetchUserData = (jwt) => {
  return async (dispatch) => {
    dispatch(userRequest());
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
            "Authorization":`Bearer ${jwt}`
        }
      });
      dispatch(userSuccess(response.data));
    } catch (error) {
      dispatch(userFailure(error));
    }
  };
};


export const Logout=(dispatch)=>{
    dispatch({type:LOUGOUT,payload:null})
    localStorage.clear()
}