import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import GooglePayButton from '@google-pay/button-react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../state/order/Action';
import { createPaymentLink } from '../../state/payment/paymentActions';

const CartTotal = ({ totalPr }) => {
    const token = localStorage.getItem("jwt");
    const { orderId } = useParams();
    const dispatch=useDispatch()
    
const {order}=useSelector(store=>store)
    
   

useEffect(()=>{
    dispatch(getOrder(orderId))
},
    [dispatch,orderId]
    )


    // Google Pay callback
    const handleGooglePayPayment = (paymentData) => {
        console.log('Google Pay payment data:', paymentData);
        // Extract payment status or other relevant information from paymentData
        // Handle payment success or failure
    };

    // PayPal callback
    const handlePayPalPayment = (details, data, actions) => {
        console.log('PayPal payment details:', details);
        
        
        // Extract payment status or other relevant information from details
        // Handle payment success or failure
        dispatch(createPaymentLink(orderId))
    };

    const handlePayPalOrder = async () => {
        try {
            const { data } = await axios.post(`${ API_BASE_URL}/api/payments/${orderId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log("paypal", data);

            // Redirect to the PayPal order approval URL
            window.location.href = data.payment_link_url;
        } catch (error) {
            console.error('Error creating PayPal order:', error.message);
        }
    };

    return (
        <div>
            <div className='gpayBtnHold flex justify-center'>
                {/* Google Pay Button */}
                <GooglePayButton
                    
                    environment='TEST'
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: "CARD",
                                parameters: {
                                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                                },
    
                                tokenizationSpecification: {
                                    type: "PAYMENT_GATEWAY",
                                    parameters: {
                                        gateway: "example",
                                        gatewayMerchantId: "exampleGatewayMerchantId",
    
    
                                    },
                                },
    
                            },
                        ],
                        merchantInfo: {
                            merchantId: "17613812255336763067",
                            merchantName: "Demo Only"
                        },
    
                        transactionInfo: {
    
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: "Total",
                            totalPrice: "500",
                            currencyCode: "USD",
                            countryCode: "US",
                        },
                    }}
                    onLoadPaymentData={handleGooglePayPayment}
                />
            </div>

            <div className='paypalHold'>
                {/* PayPal Script Provider */}
                <PayPalScriptProvider
                    options={{
                        "client-id": "AQLN0K662Wltcdm-lHlCG5sxOerNqzE1ZiADI6VZguXFOtKcDTJ9y7QBDIuCvnrNbTAh9O3I1sAxE5iU",
                        currency: "USD",
                    }}
                >
                    {/* PayPal Buttons */}
                    <PayPalButtons
                        aria-label='BUY WITH PAYPAL'
                        createOrder={(data, actions) => {
                            // Create order details
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: 2000,
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={handlePayPalPayment}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
};

export default CartTotal;

