import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useMutationCart, { addToCart } from '../hooks/useMutationCart'
import toast from 'react-hot-toast'

export default function Productitem({prod}) {
   // console.log(prod)
   let{imageCover,id,title,price,category,ratingsAverage,priceAfterDiscount}=prod
   
   let{data,mutate,error,isError,isSuccess} = useMutationCart(addToCart)

   let [isAdded, setIsAdded] = useState(false);

   if(isError)
      toast.error(error?.response?.data?.message)
   
   if(isSuccess)
      toast.success(data?.data?.message)

   const handleAddToCart = (id) => {
      mutate(id);
      setIsAdded(true); 
   }
    
     return (
    <div className='lg:w-1/6 md:w-1/4 sm:1/6 w-full p-3 cursor-pointer product dark:text-white'>      
       <Link to={`/productDetails/${id}/${category._id}`}>
            <img src={imageCover} className='w-full' alt=''/>
            <p className='text-green-color text-sm font-bold'>{category.name}</p>
            <p>{title}</p>
            <div className='flex justify-between my-3'>
              <div>
                 <p className={priceAfterDiscount?'line-through':''}>{price} EGP</p>
                 <p>{priceAfterDiscount?priceAfterDiscount + 'EGP':''}</p>
              </div>
              <div>
                 <span>{ratingsAverage}
                  <i className='fa-solid fa-star text-rating-color'></i>
                 </span>
              </div>
            </div>
        </Link>
        <div className='flex justify-between'>
        <button onClick={()=>{ handleAddToCart(id)}}   className='btn border-2 border-green-color bg-green-color text-white p-1 rounded-md'>add to cart</button>
        <i className={`fa-solid fa-heart ${isAdded ? 'text-red-500' : ''}`}></i>

        </div>
    </div>
  )
}
