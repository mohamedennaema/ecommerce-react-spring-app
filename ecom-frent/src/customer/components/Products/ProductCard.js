import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../../state/cart/Action";



const ProductCard=(props)=>{
    const { id,imageUrl, brand, title, color, sellingPrice, price, discountPrice,discountPersent, size } = props;
    
    const navigate =useNavigate()
    const dispatch=useDispatch()
    const handelAddToCard=()=>{
        const data={productid:id}
        
        dispatch(addItemToCart(data))
        navigate('/card')
    
      }
      
    return(
        
        <a class="showcase cursor-pointer" href={`/product/${id}`} >

                <div class="showcase-banner">

                  <img src={imageUrl} alt="Mens Winter Leathers Jackets" width="300" className="product-img default h-72 " />
                  <img src={imageUrl}  alt="Mens Winter Leathers Jackets" width="300" className="product-img hover h-72"/>

                  <p class="showcase-badge">{discountPersent} % </p>

                  <div class="showcase-actions">

                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <button class="btn-action" onClick={handelAddToCard}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    </button>

                  </div>

                </div>

                <div class="showcase-content">

                  <a href="#" class="showcase-category">{brand}</a>

                  <a href="#">
                    <h3 class="showcase-title">{title}</h3>
                  </a>

                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>

                  <div class="price-box">
                    <p class="price">${discountPrice} </p>
                    <del>${price} </del>
                  </div>

                </div>

              </a>
    )
}
export default ProductCard