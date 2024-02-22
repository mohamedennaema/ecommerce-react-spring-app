
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../state/product/Action'

import { addItemToCart } from '../../../state/cart/Action'
import ProductReview from './ProductReview'
import ProductSimilair from './ProductSimilair'
import { Button } from '@mui/material'


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState()
  

  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch();



  const product = useSelector((state) => state.products);
  const { products } = useSelector(store => store)
  const [category, setcategory] = useState({})
 




  const handelAddToCard = () => {
    const data = { productid: params.productId, size: selectedSize }

    dispatch(addItemToCart(data))
    navigate('/card')

  }
  


  useEffect(() => {






    dispatch(findProductById(params.productId))
   


    setcategory({
      "cat": products.products.category?.name,
      "topcat": products.products.category?.parentCategory.name

    })
  }, [params.productId,dispatch])

  


  return (
    <div className="bg-white">
      <div className="pt-6">



        <section className=' grid grid-cols-2'>
          {/* Image gallery */}
          <div className="flex flex-col items-center mt-4  lg:col-span-1 xsm:col-span-12 md:col-span-5 sm:col-span-12 ">

            <div className=" rounded-lg  max-w-[30rem] max-h-[35rem]">
              <img
                src={products.products.imageUrl}
                alt={"aa"}
                className="h-full w-full object-cover object-center rounded-lg"
              />
            </div>
            {<div className=" flex flex-wrap space-x-1 justify-center mt-2">
              {
                [1, 2, 3].map((item) =>

                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem]">
                    <img
                      src={products.products.imageUrl}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )
              }

            </div>}

          </div>

          {/* Product info */}
          <div className=" sm:col-span-12 xsm:col-span-12 lg:col-span-1 items-center  md:col-span-5 md:text-center  ">
            <div className="lg:text-start">
              <h1 className=" text-lg">{products.products.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-4 md:row-span-1 text-center md:text-center lg:mt-0 lg:text-start">
              <h2 className=" text-gray-500 text-lg opacity-1">{products.products.brand}</h2>
              <div className="flex  mt-1 justify-center">
                <p className="pe-1">{products.products.discountPrice}$</p>
                <p className="px-1 text-red-700 line-through opacity-3">{products.products.price}$</p>
                <p className="px-1 text-green-400">{products.products.discountPersent} % of</p>

              </div>


              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                     <label  className={product.products.numRatings>rating?"fas fa-star text-orange-500 ":"fas fa-star text-slate-200"}></label>
                  ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-100">
                    {product.products.reviews?.length} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10 flex  flex-col justify-center align-baseline text-center">



                {/* Sizes */}
                <div className="mt-10">
                  <div className=" items-center md:justify-between">
                    <h3 className="text-sm font-medium mb-5 text-gray-900">Size</h3>
                    <div className='flex justify-center'>
                      {
                        product.products.size?.map((item) => {
                          return (
                            <span onClick={()=>setSelectedSize(item.name)}className="button-select-zize mr-3">{item.name} </span>

                          )
                        })
                      }



                    </div>

                  </div>

                </div>

                <button onClick={handelAddToCard}
                  type="submit"
                  className="mt-10 flex text-center  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to card
                </button>
              </form>
            </div>
            


          </div>
        </section>

        <ProductReview produitView={products.products} />

        {/* simailr Product*/}
        {
          <ProductSimilair cat={products.products.category?.name} topcat={products.products.category?.parentCategory.name} />
        }


      </div>
    </div>
  )
}
