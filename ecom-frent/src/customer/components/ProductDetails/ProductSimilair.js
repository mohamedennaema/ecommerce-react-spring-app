import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProduct } from "../../../state/product/Action";
import ProductCard from "../Products/ProductCard";
import HomeSectioCard from "../homesectioCard/homeSEctionCard";
import axios from "axios";
import { API_BASE_URL } from "../../../config/apiConfig";
import { useParams } from "react-router-dom";
import { Pagination } from '@mui/material'

const ProductSimilair=({cat ,topcat})=>{
   
   
  
    
    const [productsSimailair,setproductsSimailair]=useState([])
    const [pageNumber,setPageNumber]=useState(0)
    

    const params=useParams()
    const handelPaginaationChang=(e,value)=>{
        
        
        setPageNumber(value-1)

    }
  
    const getSimailirProducts = async () => {
        const queryString = `?color=&size=&minPrice=0&maxPrice=10000&minDescount=0&sort=&stock=null&pageNumber=${pageNumber}&pageSize=8&category=${cat}&topLavelCat=${topcat} `;
       
       
        try {
            const { data } = await axios.get(`${API_BASE_URL}/products/products${queryString}`);
            setproductsSimailair(data)

            // Redirect to the PayPal order approval URL
            
        } catch (error) {
            console.error('Error creating PayPal order:', error.message);
        }
    };
    useEffect(()=>{
   
    

        getSimailirProducts()

          },[params.productId,pageNumber,cat])

          

         

        

  
     
    

    return(
        <section className="p-10">
        <h1 className=' text-xl uppercase opacity-90 text-start ps-1'>Product Similair </h1>  
        <div className=' flex flex-wrap  justify-center border pt-10 mt-5'>
        <div className="lg:col-span-3 w-full relative">
                {
                  
                
                <div className='product-grid'>
                  
                  {
                   productsSimailair.content?.map((item)=><ProductCard {...item}/>)
                  }

                  
                </div>
}
                
                
                </div>
                <section>
            <div className=' flex justify-center px-3 py-3'>
            <Pagination count={productsSimailair.totalPages} color="secondary"  onChange={handelPaginaationChang} />
            </div>
          </section>
          
          
        </div>
        </section>
    )
}

export default ProductSimilair