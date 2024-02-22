import { Button, Grid, TextField } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserData, register } from "../../state/Auth/Action";

const RegesterForm=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt")
    const {auth}=useSelector(store=>store)
    useEffect(()=>{
        if(jwt){
            dispatch(fetchUserData(jwt))
        }

    },[jwt,auth.jwt])
    const handeSubmit=(e)=>{
        e.preventDefault()
        const data= new FormData(e.currentTarget)
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password"),
            
        }
        dispatch(register(userData))
         console.log(userData)
    }
    return(
        <div>
         <form onSubmit={(e)=>handeSubmit(e)}>
                               <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} spacing={1}>
                                <TextField  required autoComplete="givaen name" fullWidth name="firstName" label="firstName" id=" firstName"/>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField required autoComplete="givaen name" 
                                fullWidth name="lastName" label="lastName" id="lastName"/>

                                </Grid>
                                
                                <Grid item xs={12} sm={12} spacing={1}>
                                <TextField required autoComplete="givaen name" fullWidth name="email" label="email" id="email"/>

                                </Grid>
                                <Grid item xs={12} sm={12} spacing={1}>
                                <TextField required autoComplete="password" fullWidth name="password" label="password" id="password"/>

                                </Grid>
                                <Grid item  xs={12} sm={12}>
                 
              
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn"  type="submit">
                            Regester
							</button>
						</div>
					</div>
                                </Grid>
                                
                               </Grid>
                            </form>

                            <div>
                                <div className=" p-3 flex items-center">
                                    <p>if you have alredy acount ?</p>
                                    <Button onClick={()=>navigate("/login")} className=" text-sm ml-5">Login</Button>
                                </div>
                            </div>
        </div>
     
    )
}
export default RegesterForm