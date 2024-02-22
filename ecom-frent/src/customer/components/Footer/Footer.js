import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Grid, Typography } from "@mui/material"

const Footer=()=>{
    return(
        <div>
            <Grid className=" bg-slate-800 text-white p-10 mt-2 " container>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className=" text-left " variant="h6">
                      Contact
                    </Typography>
                    <div className=" text-left mt-3">
                    <i class="fa-solid fa-location-dot mr-5 text-2xl"></i> 
                    <span className=" text-xs">Kenitra,Moroco</span>
                    </div>
                    <div  className=" text-left mt-3">
                    <i class="fa-solid fa-phone mr-5 text-2xl"></i>
                    <span className=" text-xs">+212 6 50 76 61 95 </span>

                    </div><div  className=" text-left mt-3">
                    <i class="fa-solid fa-envelope mr-5 text-2xl"></i>
                    <span className=" text-xs">ennaemmohamed0@gmail.com </span>

                    </div>
                   <div>
                    
                    </div>
                    
                    
                    

                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className=" mb-11 text-left mt-4" variant="h6">
                      About me
                    </Typography>
                    <p className=" text-white text-left text-xs text-clip mt-5">
                    Je suis ENNAEM Mohamed, un développeur Full Stack passionné par la création 
                    d'applications web innovantes. Ma mission est d'utiliser mes compétences 
                    techniques pour construire des solutions numériques puissantes et accessibles
                    </p>
                    
                    <div className=" flex justify-start ">
                  
                 
                    <a  href ="https://www.linkedin.com/in/mohamed-ennaem-000597227/" class="fa-brands fa-linkedin text-4xl m-4 text-white"></a>
                    <a href="https://wa.me/+212650766195" class="fa-brands fa-whatsapp text-4xl m-4 text-white"></a>
                    <a href="https://github.com/mohamedennaema" class="fa-brands fa-github text-4xl m-4 text-white"></a>
                    </div>

                </Grid>
               
                
                <Grid xs={12} className="mt-10 text-white">
                <p className=" ">&copy; 2023 Mohamed ENNAEM. All rights reserved.</p>
                </Grid>
            </Grid>
            
        </div>
    )
}
export default Footer