


import { Grid, Icon, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../state/cart/Action";
import { createPaymentLink } from "../../../state/payment/paymentActions";
import CardItem from "../card/CardItem";
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import GooglePayButton from '@google-pay/button-react';
import { getOrder } from "../../../state/order/Action";

const OrderSumary=(props)=>{
  const step=props.step
  console.log(step)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation();
  
    const {card}=useSelector(store=>store)
    

    console.log("card",card)
  
    
    const query=new URLSearchParams(location.search)
    const param=query.get('step')
    const orderId=query.get('order_id')
    const {order}=useSelector(store=>store)

    useEffect(()=>{
        dispatch(getOrder(orderId))
       
    },
        [dispatch,orderId]
        )


    console.log("prams",param)
    const handelChckOut=  ()=>{
      
      if(param==3){
     
          const response =  dispatch(createPaymentLink(orderId));
          console.log("responce",response)
  
          
       
      }else{
        navigate(`/checkout?step=2`)
      }
     
             
    }
   
    useEffect(()=>{
      dispatch(getCart())
    },[dispatch])
     
     const handleGooglePayPayment = (paymentData) => {
        console.log('Google Pay payment data:', paymentData);
    
    };

  
    const handlePayPalPayment = (details, data, actions) => {
        console.log('PayPal payment details:', details,data,actions);
        dispatch(createPaymentLink(orderId));
        

       
    };
    
    return(
        <div className="p-10">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={7} container className="md:order-2 sm:order-2 lg:order-1">
    
           {
            order.order?.orderItems.map((item)=>{
                return <CardItem item= {item}/>
            })
           }
           
           
            </Grid>
            <Grid item xs={12} md={10} lg={4} className="md:order-1 sm:order-1 lg:order-2 " >
              <div className=" border p-5 rounded mt-5">
                <h3 className="mb-5 text-lg opacity-1 uppercase text-left font-bold opacity-50 ">price details</h3><hr/>
                <div className="mt-5 mb-5">
                    <div className=" flex justify-between justify-items-center mt-4">
                        <p className=" capitalize text-lg text-clip font-bold">price</p>
                        <h5 className=" capitalize text-lg text-clip font-bold">{card.cart?.totlePrice} $</h5>
                    </div>
                    <div className=" flex justify-between justify-items-center mt-5">
                        <p className=" capitalize text-lg text-clip font-bold">descount</p>
                        <h5 className=" capitalize text-lg text-clip font-bold text-green-700">{card.cart?.discount}$</h5>
                    </div>
                    <div className=" flex justify-between justify-items-center mt-5">
                        <p className=" capitalize text-lg text-clip font-bold" > delevry charge</p>
                        <h5  className=" capitalize text-lg text-clip font-bold text-green-700">free</h5>
                    </div>
                </div><hr/>
                <div className=" flex justify-between mt-5 mb-5 "> 
                    <h3  className=" capitalize text-lg text-clip font-bold ">total Amount</h3>
                    <p  className=" capitalize text-sm text-clip font-bold text-green-700">{card.cart?.totleDiscountPrice} $</p>
                </div>
                
                <div>
            <div className='paypalHold'>
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
                            totalPrice: order.order?.totleDiscountPrice,
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
                                            value: order.order?.totleDiscountPrice,
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
              </div>
            </Grid>
            
            

          </Grid>
          
          
        </div>
    )
}
export default OrderSumary