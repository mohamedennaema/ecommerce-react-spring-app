import { Grid, Step, StepLabel, Stepper } from "@mui/material"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrder } from "../../../state/order/Action";

const OrderTracker=({activeStep})=>{
    const steps=[
        "placed",
        "order confirmed",
        "shipped",
        "out for dellvery",
        "delelvered",


    ]
    const params=useParams()
    const dispatch=useDispatch()
    const order=useSelector(state=>state.order)
    
    useEffect(()=>{
     dispatch(getOrder(params.orderId))
    },[params.orderId])
    return(
        <div className=" w-full p-10">
            <Stepper activeStep={activeStep} alternativeLabel> 
          {
              steps.map((label)=>
              <Step>
                <StepLabel sx={{color:"blue", fontSize:"44px"}} className=" capi" >
                    {label}
                </StepLabel>

              </Step>)
          }

            </Stepper>
            <div className="mt-10">
                <div>
                    {
                          order.order?.orderItems?.map((item)=>{
                            return(
                                <Grid container spacing={1} className="border rounded p-2 shadow-md">
                        <Grid item xs={6}>
                            <div className="flex justify-items-center ">
                                <img 
                                src={item.product.imageUrl}
                                className=" w-[7rem] h-[8rem] object-cover"/>
                                <div className="mx-10 text-left">
                                    <h2>{item.product.title} </h2>
                                    <p> 
                                        <span>color :{item.product.color}</span><br></br>
                                        <span>size:M</span>
                                    </p>
                                    
                                    <p>{item.price}$</p>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            <div className="flex  justify-center ">
                                <StarBorderOutlinedIcon/>
                                <span className="text-sm opacity-90 ms-2"> review and rate</span>
                            </div>


                        </Grid>

                    </Grid>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}
export default OrderTracker