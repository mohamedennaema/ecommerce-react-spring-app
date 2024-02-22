import { Girl } from "@mui/icons-material"
import { Grid } from "@mui/material"
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import { useNavigate } from "react-router-dom";

const OrderItem=({item})=>{
    const navigate=useNavigate()
    return(
        <div  className="border rounded mt-5 cursor-pointer " onClick={()=>navigate(`/acount/orders/${item.id}`)}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
                <div className="  flex justify-items-center">
                    <div className="w-[6rem]">
                    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70" 
                    className=" object-cover w-[6rem] "/>
                    </div>
                    <div className=" text-left ps-5 flex flex-col justify-items-center justify-center align-middle">
                    <p className=" text-lg ">Men slim mid rise black jeans</p>
                    <p className=" text-sm text-gray-700 font-bold">Number of Products :{item.totlItem}</p>
                    <p className=" text-sm text-gray-700 font-bold">Create Att  :{item.createAtt}</p>

                </div>
                </div>
                
            </Grid>
            <Grid item xs={2}>
                <div className="mt-5" >
                    <p className=" font-bold text-gray-700">{item.totleDiscountPrice} $</p>
                    <p className="px-1 text-red-700 line-through opacity-3">
                    {item.totalPrice} $
            </p>
                </div>

            </Grid>
            <Grid item xs={5}>
                <div className="mt-5 mb-3  " >
                    <AdjustRoundedIcon className=" text-lime-600 me-3"/>
                    
                    <span className=" font-bold text-lg">expend delevry thi,s</span>
                   
                </div>
                <div>
                    <p className=" text-gray-400 text-sm ms-10">yout item has benn delevrd</p>
                </div>

            </Grid>

          </Grid>
        </div>
    )
}
export default OrderItem