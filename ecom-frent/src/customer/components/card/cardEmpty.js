import React from 'react'


const EmptyCart = () => {
    return (
        <div className=' emptyCartMainParent text-center  top-20 h-full'>

            <div id='fs'>
                <p className=' text-3xl fof uppercase ' id='fs'>Cart Is Empty Maybe Order Something :) </p>
            </div>

            <div className=' flex justify-center'>
                <img src={process.env.PUBLIC_URL+"/image/cartGif.gif"} className=" flex justify-center cg" />
            </div>
        </div>
    )
}

export default EmptyCart