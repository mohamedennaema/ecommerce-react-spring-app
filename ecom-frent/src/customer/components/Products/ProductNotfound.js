import React from 'react'






const ProductNotfound = () => {
    return (
        <div className=' emptyCartMainParent text-center  top-20 h-full'>

            <div id='fs'>
                <p className=' text-3xl fof uppercase ' id='fs'>Product not found :) </p>
            </div>

            <div className=' flex justify-center'>
                <img src={process.env.PUBLIC_URL+"/image/product-not-found.gif"} className=" flex justify-center cg" />
            </div>
        </div>
    )
}

export default ProductNotfound