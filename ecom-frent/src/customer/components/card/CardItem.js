import { Grid, Icon, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart, removeCartItem, updateCartItem } from "../../../state/cart/Action";





const CardItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = props.item
  const { card } = useSelector((store) => store);
  const handelupdatecardItem = (num) => {
   
    const data={items:{quintity:item.quintity+num},cardItemId:item?.id}
    dispatch(updateCartItem(data))
  }

  const handelremovecardItem=()=>{
    dispatch(removeCartItem(item.id))


  }
  

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch,card.carditems]);

  return (
    <Grid item xs={12} className="rounded-sm">
        <div className="border flex mt-5 flex-wrap md:order-2 rounded-sm shadow-sm p-1">
          <div className="w-[12rem] h-[17rem] rounded-sm">
              {item?.product && (
                <>
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    className="object-contain object-left-top h-[14rem] w-[12rem] rounded-sm"
                  />
                  <div className="flex justify-items-center justify-start mb-2">
                    <IconButton onClick={()=>handelupdatecardItem(-1)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <IconButton>
                      <button className="text-sm bg-slate-400 rounded-sm w-8 h-8 ">
                        {item?.quintity}
                      </button>
                    </IconButton>
                    <IconButton onClick={()=>handelupdatecardItem(+1)}>
                      <AddCircleOutlineIcon  />
                    </IconButton>
                    <IconButton onClick={()=>handelremovecardItem()}>
                      remove
                    </IconButton>
                  </div>
                </>
              )}
          </div>
          <div className="text-start pt-5">
            <div className="text-start">
                <h3 className="text-bold text-2xl text-gray-800">
                  {item?.product?.title}
                </h3>
                <p className="capitalize text-sm mt-1">
                  seller: {item?.product?.brand}
                </p>
                <p className="capitalize mt-1">
                  size: {item?.size} {item?.product?.color}
                </p>
            </div>
            <div className="flex mt-1">
                <p className="pe-1">{item?.product?.discountPrice}</p>
                <p className="px-1 text-red-700 line-through opacity-3">
                  {item?.product?.price}$
                </p>
                <p className="px-1 text-green-400">
                  {item?.product?.discountPersent}% off
                </p>
            </div>
          </div>
        </div>
    </Grid>
  );
};

export default CardItem;
