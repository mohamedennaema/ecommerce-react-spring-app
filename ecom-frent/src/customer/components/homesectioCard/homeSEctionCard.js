const  HomeSectioCard=(props)=>{
    const { imageUrl,desc, brand, title, id,color, sellingPrice, price, discountedPrice,discountPersent, size } = props;
    return(
        <a  href={`/product/${id}`}className=" border w-[20rem] cursor-pointer m-2 ">
            <div className="  cursor-pointer flex flex-col justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[15 rem] mx-2">
               <div className="   h-[13rem]  flex justify-center ">
                <img className=" object-contain object-top  " src={imageUrl} />
               </div>
               <div className="p-3">
                <h3 className=" text-lg text-gray-500 text-start font-medium"> {String(title).slice(0, 20)}</h3>
                <p className=" text-sm text-gray-950 text-start ">
                {String(desc).slice(0, 100)}...
                </p>

               </div>
            </div>


        </a>
    )
}

export default HomeSectioCard;