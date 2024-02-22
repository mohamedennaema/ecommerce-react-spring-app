import { Grid } from "@mui/material"
import OrderItem from "./OrderItem"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../../../state/Store"
import { useEffect } from "react"
import { getOrderuser } from "../../../state/order/Action"


const Order=()=>{
    const dispatch=useDispatch()
    const {order}=useSelector(store=>store)
    

  
    useEffect(()=>{
        dispatch(getOrderuser())
        
      
        
    },[dispatch])
    return(
        <div className="p-10">
            
            <Grid container spacing={1}>
                
                
                <Grid item xs={8}>
                   <div>
                    {
                         order.order?.map((item)=>{
                            return(
                            <OrderItem item={item}/>
                            )
                        })
                    }
              
                   
                   </div>
                </Grid>

            </Grid>
        </div>
    )
}
export default Order