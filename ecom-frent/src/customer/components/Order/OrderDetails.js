import { useParams } from "react-router-dom"
import AddressDelivry from "../chekout/AdressDelevry"
import OrderTracker from "./OrderTrack"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getOrder } from "../../../state/order/Action"

const OrderDetails=()=>{

    const params=useParams()
    const dispatch=useDispatch()
    const order=useSelector(state=>state.order)
    
    useEffect(()=>{
     dispatch(getOrder(params.orderId))
    },[params.orderId])
    const address=order.order?.shipingAddress
    return(
        <div className="p-10">
            <div>
               <h1 className="text-left">Delevry address</h1>
               <AddressDelivry item={order.order?.shipingAddress}/>
            </div>
            
            <div>
              
                         <OrderTracker activeStep={order.order?.stepDelvry} />
                    
            </div>
        </div>
    )
}
export default OrderDetails