import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../state/cart/Action";

import EmptyCart from "./cardEmpty";
import Cart from "./cart";

const CardHandel=()=>{
 
    const dispatch=useDispatch()
  
    const {card}=useSelector(store=>store)
 
    useEffect(()=>{
      dispatch(getCart())
    },[dispatch])
    
    return(
      <div>
        {card.cart?.totleitem!=0?<Cart/>:<EmptyCart/>}
      </div>
    )
}
export default CardHandel