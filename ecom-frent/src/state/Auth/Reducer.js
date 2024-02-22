// authReducer.js

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from './ActionType';

const initialState = {
  isLoggedIn: false,
  user: null,
  error:null,
  jwt:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case USER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        
        error:null,
        jwt:action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        error:null
      };
    case USER_SUCCESS:
      return {
        ...state,
        error:null,
        isLoggedIn: false,
        user: action.payload
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        
        error:action.payload
        
      };
      case LOUGOUT:
      return {
        ...initialState
        
       
        
      };
    default:
      return state;
  }
};

export default authReducer;
