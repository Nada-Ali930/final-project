import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Productitem from './Productitem'
import useMutationCart, { addToCart } from '../hooks/useMutationCart'
import toast from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
export default function ProductDetails() {

  let{data,mutate,error,isError,isSuccess} = useMutationCart(addToCart)

   if(isError)
      toast.error(error?.response?.data?.message)
   
   if(isSuccess)
      toast.success(data?.data?.message)



  let [relatedProducts,setRelatedProducts] = useState([])
  let [imgSrc,setImgSrc] = useState('')
  let [ind,setIndex] = useState(0)

  let {id,catId} = useParams()

  function changeSrc(e){
     setIndex(e.target.getAttribute('index'))
     setImgSrc(e.target.src)
  }

  async function getProductDetails(){
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  let{data:dataobj,isLoading} = useQuery({queryKey:['productDetails',id],
    queryFn:getProductDetails,
    select:(dataobj)=>dataobj?.data?.data
  })

  async function getRelatedProducts(){
    try {
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`)
      setRelatedProducts(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getRelatedProducts()
  },[])

  if(isLoading)
    return <Loading></Loading>

  return (
    <div className='container'>
      <div className="flex items-center gap-6">
        <div className="w-1/3">
           <img src={imgSrc?imgSrc:dataobj?.imageCover} className='w-full my-6 '/>
           <div className="flex gap-2">
               {dataobj?.images?.map((img,index)=><img index={index} onClick={changeSrc} src={img} key={img} className={`w-[20%] cursor-pointer gap-2 transition-all ${index==ind?'border-4 border-green-color opacity-100 scale-95'
                :'opacity-60'}`}/>)}
           </div>
        </div>
        <div className="w-2/3 ms-3">
        <h2 className='text-[2rem] font-bold my-4'>{dataobj?.title}</h2>
        <p>{dataobj?.description}</p>
        <div className="flex justify-between">
         <div>
          <h3 className='font-semibold text-sm text-gray-400'>{dataobj?.category?.name}</h3>
         </div>
          <div>
           <span>{dataobj?.ratingsAverage}<i className='fa-solid fa-star text-rating-color'></i></span>
           <p>{dataobj?.price} EGP</p>
          </div>
        </div>
    
        <button onClick={()=>{mutate(dataobj._id)}} className='btn w-full bg-green-color text-white my-3 p-3'>add to cart</button>
        
        
        </div>
      </div>
      <h2 className='text-[1.8rem] my-4 font-bold '>Related Products</h2>
      <div className="row">
         <div className="flex flex-wrap ">
        {relatedProducts.length ? relatedProducts.map(prod => <Productitem prod={prod} key={prod._id}></Productitem>) : <Loading></Loading>}
      </div>
      </div>
    </div>
  )
}







// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Loading from './Loading'
// import Productitem from './Productitem'
// import useMutationCart, { addToCart } from '../hooks/useMutationCart'
// import toast from 'react-hot-toast'
// export default function ProductDetails() {

//   let{data,mutate,error,isError,isSuccess} = useMutationCart(addToCart)

//    if(isError)
//       toast.error(error?.response?.data?.message)
   
//    if(isSuccess)
//       toast.success(data?.data?.message)



//   let [productObj,setProductObj] = useState({})
//   let [relatedProducts,setRelatedProducts] = useState([])
//   let [loading,setLoading] = useState(false)
//   let [imgSrc,setImgSrc] = useState('')
//   let [ind,setIndex] = useState(0)

//   let {id,catId} = useParams()

//   function changeSrc(e){
//      setIndex(e.target.getAttribute('index'))
//      setImgSrc(e.target.src)
//   }

//   async function getProductDetails(){
//     setLoading(true)
//     try {
//       let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
//       setProductObj(data.data)
//       // console.log(data.data)
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }
//   async function getRelatedProducts(){
//     try {
//       let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`)
//       setRelatedProducts(data.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//     getRelatedProducts()
//   },[])

//   useEffect(()=>{
//     getProductDetails()
//   },[id])

//   if(loading)
//     return <Loading></Loading>
//   return (
//     <div className='container'>
//       <div className="flex items-center gap-6">
//         <div className="w-1/3">
//            <img src={imgSrc?imgSrc:productObj?.imageCover} className='w-full my-6 '/>
//            <div className="flex gap-2">
//                {productObj?.images?.map((img,index)=><img index={index} onClick={changeSrc} src={img} key={img} className={`w-[20%] cursor-pointer gap-2 transition-all ${index==ind?'border-4 border-green-color opacity-100 scale-95'
//                 :'opacity-60'}`}/>)}
//            </div>
//         </div>
//         <div className="w-2/3 ms-3">
//         <h2 className='text-[2rem] font-bold my-4'>{productObj.title}</h2>
//         <p>{productObj?.description}</p>
//         <div className="flex justify-between">
//          <div>
//           <h3 className='font-semibold text-sm text-gray-400'>{productObj?.category?.name}</h3>
//          </div>
//           <div>
//            <span>{productObj?.ratingsAverage}<i className='fa-solid fa-star text-rating-color'></i></span>
//            <p>{productObj.price} EGP</p>
//           </div>
//         </div>
//         <button onClick={()=>{mutate(productObj._id)}} className='btn w-full bg-green-color text-white my-3 p-3'>add to cart</button>
//         </div>
//       </div>
//       <h2 className='text-[1.8rem] my-4 font-bold '>Related Products</h2>
//       <div className="row">
//          <div className="flex flex-wrap ">
//         {relatedProducts.length ? relatedProducts.map(prod => <Productitem prod={prod} key={prod._id}></Productitem>) : <Loading></Loading>}
//       </div>
//       </div>
//     </div>
//   )
// }

