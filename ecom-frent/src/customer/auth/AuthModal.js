import { Box, Button, Modal, Typography } from "@mui/material";
import RegesterForm from "./RegesterForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    p: 4,
  };
  
const AuthModal=({handleClose,handleOpen,open})=>{
  const location=useLocation();
    return(
        <div   >
       
<Modal

className="modal "
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-"
>
  <Box  sx={style} >
    {
      location.pathname==="/login"?<LoginForm/>:<RegesterForm/>
    }
     
  </Box>
</Modal>
        </div>
    )
}


export default AuthModal;