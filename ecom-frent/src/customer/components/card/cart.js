import CardItem from "./CardItem"
import { Grid } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../state/cart/Action";
import { createPaymentLink } from "../../../state/payment/paymentActions";

const Cart=(props)=>{
  const step=props.step
  
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation();
  
    const {card}=useSelector(store=>store)
    const query=new URLSearchParams(location.search)
    const param=query.get('step')
    const orderId=query.get('order_id')
 
    const handelCheckOut=  ()=>{
      
      if(param==3){
     
          const response =  dispatch(createPaymentLink(orderId));  
       
      }else{
        navigate(`/checkout?step=2`)
      }         
    }
   
    useEffect(()=>{
      dispatch(getCart())
    },[dispatch])
    
    return(
      
        <div className="p-10">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={7} container className="md:order-2 sm:order-2 lg:order-1">
    
              {
                card.cart?.cardItems.map((item)=>{
                    return <CardItem  item= {item}/>
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
                
              <button onClick={handelCheckOut}
                type="submit"
                className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Chek Out
              </button>
              </div>
            </Grid>
            
            

          </Grid>
          
          
        </div>
    )
}
export default Cart