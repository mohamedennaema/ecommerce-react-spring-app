import { useDispatch, useSelector } from "react-redux"
import Footer from "../../components/Footer/Footer"
import HomeSectionCarsel from "../../components/homeSectionCarsel/homeSectionCarsel"
import { useEffect, useState } from "react"
import { fetchHomeProducts } from "../../../state/home/Action"
import { API_BASE_URL } from "../../../config/apiConfig"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const { default: MainCarousel } = require("../../components/homeCarousel/MainCarousel")

const HomePage=()=>{

  const [homeProductCat,setHomeProductCat]=useState([])
  let handlePayPalOrder = async () => {
    
    
    
   
    try {
        const { data } = await axios.get(`${API_BASE_URL}/products/getProduct`);
        setHomeProductCat(data)
        

        // Redirect to the PayPal order approval URL
        
    } catch (error) {
        console.error('Error creating PayPal order:', error.message);
    }
};
useEffect(()=>{



handlePayPalOrder()



      },[])
   


  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  const [homeProduct,setHomeProduct]=useState([])
  const [hometerndProduct,setHomeTrendProduct]=useState([])


  const  getHomeProduct = async () => {
    try {
        const { data } = await axios.get(`${ API_BASE_URL}/products/products/home`);
        setHomeProduct(data)
       

        // Redirect to the PayPal order approval URL
        
    } catch (error) {
        console.error('Error creating PayPal order:', error.message);
    }
};
const  gettrendProduct = async () => {
  try {
      const { data } = await axios.get(`${ API_BASE_URL}/products/trending-products`);
      setHomeTrendProduct(data)
     

      // Redirect to the PayPal order approval URL
      
  } catch (error) {
      console.error('Error creating PayPal order:', error.message);
  }
};

  useEffect(()=>{
 



     dispatch(fetchHomeProducts)
     getHomeProduct()
     gettrendProduct()
   
  },[dispatch])
    return(
        <div className="alice-carousel">
             

             <MainCarousel/>
            <div class="category mt-16 ">

              <div class="container">

                  <div class="category-item-container has-scrollbar">
{
  hometerndProduct.map((item)=>{
    return(
      <div class="category-item">

    <div class="category-img-box">
      <img src={item.imageUrl} alt="hat & caps" width="50"/>
    </div>

    <div class="category-content-box">

      <div class="category-content-flex">
        <h3 class="category-item-title">{item.brand}</h3>

        <p class="category-item-amount">({item.numRating})</p>
      </div>

      <a href="#" class="category-btn">Show all</a>

    </div>

  </div>
    )
    
  })
}
                       
                   

                  </div>

              </div>

            </div>
            <div className="product-box ">
            <div class="product-minimal container">

<div class="product-showcase">

  <h2 class="title">New Arrivals</h2>

  <div class="showcase-wrapper has-scrollbar">

  {
    homeProduct.newArrivals?.map((items)=>{
      return(
        <div class="showcase-container ">
          {
            items.map((item)=>{
              return(
                <div class="showcase" onClick={()=>navigate(`/product/${item.id}`)}>
    
        <a href="/" class="showcase-img-box">
          <img src={item.imageUrl} alt="men yarn fleece full-zip jacket" class="showcase-img"
            width="70"/>
        </a>
    
        <div class="showcase-content">
    
          <a href="#">
            <h4 class="showcase-title">{item.title}</h4>
          </a>
    
          <a href="#" class="showcase-category">{item.brand}</a>
    
          <div class="price-box">
            <p class="price">${item.discountPrice}</p>
            <del>${item.price}</del>
          </div>
    
        </div>
    
      </div>
              )
            })
          }
        </div>
      )
    })

  }

  

  </div>

</div>

<div class="product-showcase">

  <h2 class="title">Trending</h2>

  <div class="showcase-wrapper  has-scrollbar">

  {
    homeProduct.trendingPproduct?.map((items)=>{
      return(
        <div class="showcase-container ">
          {
            items.map((item)=>{
              return(
                <div class="showcase" onClick={()=>navigate(`/product/${item.id}`)}>
    
        <a href="#" class="showcase-img-box">
          <img src={item.imageUrl} alt="men yarn fleece full-zip jacket" class="showcase-img"
            width="70"/>
        </a>
    
        <div class="showcase-content">
    
          <a href="#">
            <h4 class="showcase-title">{item.title}</h4>
          </a>
    
          <a href="#" class="showcase-category">{item.brand}</a>
    
          <div class="price-box">
            <p class="price">${item.discountPrice}</p>
            <del>${item.price}
</del>
          </div>
    
        </div>
    
      </div>
              )
            })
          }
        </div>
      )
    })

  }

  </div>

</div>

<div class="product-showcase">

  <h2 class="title">Top Rated</h2>

  <div class="showcase-wrapper  has-scrollbar">

   {
    homeProduct.topRated?.map((items)=>{
      return(
        <div class="showcase-container ">
          {
            items.map((item)=>{
              return(
                <div class="showcase" onClick={()=>navigate(`/product/${item.id}`)}>
    
        <a href="#" class="showcase-img-box">
          <img src={item.imageUrl} alt="men yarn fleece full-zip jacket" class="showcase-img"
            width="70"/>
        </a>
    
        <div class="showcase-content">
    
          <a href="#">
            <h4 class="showcase-title">{item.title}</h4>
          </a>
    
          <a href="#" class="showcase-category">{item.brand}</a>
    
          <div class="price-box">
            <p class="price">${item.discountPrice}</p>
            <del>${item.price}
</del>
          </div>
    
        </div>
    
      </div>
              )
            })
          }
        </div>
      )
    })

  }

  </div>

</div>

</div>
            </div>
           
             <div className=" h-7"></div>
             <h2 className=' text-3xl font-bold   text-left p-5 '>Men's</h2>  
                <HomeSectionCarsel item={homeProductCat.Men}/>
                <h2 className=' text-3xl font-bold   text-left p-5 '>Electronics</h2>  
                <HomeSectionCarsel item={homeProductCat["Electronics"]}/>
                <h2 className=' text-3xl font-bold   text-left p-5 '>Women's</h2>  
                <HomeSectionCarsel item={homeProductCat["Women's"]}/>
              
           
           
            

             
            
        </div>
        
    )
}
export default HomePage