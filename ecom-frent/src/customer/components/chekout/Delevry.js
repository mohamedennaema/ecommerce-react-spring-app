import { Grid, TextField } from "@mui/material";
import AddressDelivry from "./AdressDelevry";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../state/order/Action";

const Delevry=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handeSubmit=(e)=>{
        e.preventDefault()
        const data= new FormData(e.currentTarget)
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("Address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zipCode"),
            mobile: data.get("phone"),
          };
         console.log(address)
         const orderData={address,navigate}
         dispatch(createOrder(orderData))
    }
     return(
        <div>
            <div>
                <Grid  container spacing={2}>
                    <Grid item sm={3}>
                        <div className=" h-[30rem] border overflow-y-scroll">
                            <div>
                                <AddressDelivry/>
                            </div>
                        <button
                type="submit"
                className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to card
              </button>
                        </div>


                    </Grid>
                    <Grid item sm={8}>

                        <div className="border p-5  rounded">
                            <form onSubmit={(e)=>handeSubmit(e)}>
                               <Grid container spacing={2}>
                                <Grid item xs={12} sm={5} spacing={1}>
                                <TextField required autoComplete="givaen name" fullWidth name="firstname" label="firstName" id=" firstName"/>

                                </Grid>
                                <Grid item xs={12} sm={5}>
                                <TextField required autoComplete="givaen name" 
                                fullWidth name="lastName" label="lastName" id="lastName"/>

                                </Grid>
                                <Grid item xs={12} sm={10}>
                                <TextField required 
                                autoComplete="Adress" 
                                fullWidth name="Address" rows={5} multiline
                                label="Address" id="Address"/>

                                </Grid>
                                <Grid item xs={12} sm={5} spacing={1}>
                                <TextField required autoComplete="givaen name" fullWidth name="city" label="city" id=" city"/>

                                </Grid><Grid item xs={12} sm={5} spacing={1}>
                                <TextField required autoComplete="sate/provnice/country" fullWidth name="state" label="sate/provnice/country" id=" firstName"/>

                                </Grid><Grid item xs={12} sm={5} spacing={1}>
                                <TextField required autoComplete="zip" fullWidth name="zipCode" label="Zip/Postal Code" id="Zip"/>

                                </Grid><Grid item xs={12} sm={5} spacing={1}>
                                <TextField required autoComplete="Phone number" fullWidth name="phone" label="Phone Number" id=" phone number"/>

                                </Grid>
                                <Grid item>
                                <button
                type="submit"
                className="mt-10 flex  items-center  uppercase justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                  Delevry here
              </button>
                                </Grid>
                                
                               </Grid>
                            </form>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
     )
}
export default Delevry