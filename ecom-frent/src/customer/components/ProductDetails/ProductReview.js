import { Avatar } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createReview, getReviewById } from "../../../state/review/actions"

import { createRating } from "../../../state/rating/actions"
import { useParams } from "react-router-dom"
import { findProductById } from "../../../state/product/Action"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const ProductReview=({produitView})=>{
  const dispatch=useDispatch();
  const post = document.querySelector(".post");
  const widget = document.querySelector(".star-widget");
  
  
  const params=useParams()
  
  
 const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    const selectedRating = event.target.value;
    setRating(selectedRating);
  };
  const handeSubmit=(e)=>{
    e.preventDefault()
    const data= new FormData(e.currentTarget)
    const userData={
      raview:data.get("raview"),
      productId:params.productId
        
        
    }
    const rate={
       ratinge:rating,
      productId:params.productId
    }
    
   
    dispatch(createReview(userData))
    dispatch(createRating(rate))
  

    post.style.display = "block";
    widget.style.display = "none";

    
}
  useEffect(()=>{
    dispatch(getReviewById(1))
    dispatch(findProductById(params.productId))
    
  },[dispatch])
    return(
        <div className="review">
        <header>
        <div class="container">
          <div class="container-left">
            <div class="post">
              <div class="text">Thanks for rating us!</div>
            
            </div>
            <div class="star-widget">
             <input type="radio" name="rate" id="rate-5" value="5" onChange={handleRatingChange} />
      <label htmlFor="rate-5" className="fas fa-star"></label>

      <input type="radio" name="rate" id="rate-4" value="4" onChange={handleRatingChange} />
      <label htmlFor="rate-4" className="fas fa-star"></label>

      <input type="radio" name="rate" id="rate-3" value="3" onChange={handleRatingChange} />
      <label htmlFor="rate-3" className="fas fa-star"></label>

      <input type="radio" name="rate" id="rate-2" value="2" onChange={handleRatingChange} />
      <label htmlFor="rate-2" className="fas fa-star"></label>

      <input type="radio" name="rate" id="rate-1" value="1" onChange={handleRatingChange} />
      <label htmlFor="rate-1" className="fas fa-star"></label>


              <form action="#" onSubmit={(e)=>handeSubmit(e)}>
                    
              
             
 
                <header></header>
                <div class="textarea">
                  <textarea cols="30" placeholder="Describe your experience.." name="raview"></textarea>
                </div>
                <div class="btn">
                  <button type="submit">Post</button>
                </div>
              </form>
            </div>
          </div>
          <div class="container__right">
            {
              produitView.reviews?.map((item,index)=>{
                return(
                  <div class="card">
                  <Avatar> {item.user.firstName[0]}</Avatar>
                  <div class="card__content">
                    <span><i class="ri-double-quotes-l"></i></span>
                    <div class="card__details">
                      <p>
                       {item.review}
                      </p>
                      <h4>- {item.user.firstName} {item.user.lastName}</h4>
                      <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                     <label  className={produitView.ratings[index].rating>rating?"fas fa-star text-orange-500 ":"fas fa-star text-slate-800"}></label>
                  ))}
                </div>
                    </div>
                   
                  </div>
                  
                </div>
                )
              })
            }
           
           
          </div>
        </div>
      </header>
      </div>
    )
}
export  default ProductReview