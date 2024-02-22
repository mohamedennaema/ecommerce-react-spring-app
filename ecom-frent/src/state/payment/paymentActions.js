// paymentActions.js
import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';

const token=localStorage.getItem("jwt")

export const createPaymentLink = (orderId) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/payments/${orderId}`, null, {
            headers: {
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        console.log("payment is",response)

        dispatch({
            type: 'CREATE_PAYMENT_LINK_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'CREATE_PAYMENT_LINK_FAILURE',
            payload: error.message
        });
    }
};

export const processPayment = (paymentId, orderId) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/redirect`, {
            params: {
                payment_id: paymentId,
                order_id: orderId
            }
        });
        console.log("processPayment",response)

        dispatch({
            type: 'PROCESS_PAYMENT_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROCESS_PAYMENT_FAILURE',
            payload: error.message
        });
    }
};
