// paymentReducer.js

const initialState = {
    paymentLink: null,
    paymentStatus: null,
    error: null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PAYMENT_LINK_SUCCESS':
            return {
                ...state,
                paymentLink: action.payload,
                error: null
            };
        case 'CREATE_PAYMENT_LINK_FAILURE':
            return {
                ...state,
                paymentLink: null,
                error: action.payload
            };
        case 'PROCESS_PAYMENT_SUCCESS':
            return {
                ...state,
                paymentStatus: action.payload,
                error: null
            };
        case 'PROCESS_PAYMENT_FAILURE':
            return {
                ...state,
                paymentStatus: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default paymentReducer;
