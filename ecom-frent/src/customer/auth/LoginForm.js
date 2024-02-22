import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { login } from "../../state/Auth/Action";


const LoginForm=()=>{
    const dispatch=useDispatch();
   
    const jwt=localStorage.getItem("jwt")
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate();
    const handeSubmit=(e)=>{
        e.preventDefault()
        const data= new FormData(e.currentTarget)
        const userData={
         
            email:data.get("email"),
            passowrd:data.get("password"),
            
        }
        dispatch(login(userData))
         
    }
    return(
        <div className="limiter mt-8"  >
		<div class="container-login100">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form onSubmit={(e)=>handeSubmit(e)}class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Login
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Email</span>
						<input class="input100" type="email"  placeholder="Type your email" required autoComplete="givaen name" fullWidth name="email" label="email" id="email"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password"  placeholder="Type your password" required autoComplete="password" fullWidth name="password" label="password" id="password"/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" type="submit">
								Login
							</button>
						</div>
					</div>

				
				
					<div class="flex-col-c mt-7">
						

						<a href="/" class="txt2" onClick={()=>navigate("/register")}>
							Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}
export default LoginForm