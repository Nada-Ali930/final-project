import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from './Loading'
import Productitem from './Productitem'
import axios from 'axios'
import useProduct from '../hooks/useProduct'

export default function FeaturedProduct() {

   let {data,isError,isLoading,error,isFetching} = useProduct()
  
   if(isLoading)
      return <Loading></Loading>
  
    if(isError)
      return <h2>{error.message}</h2>

  return (
     <div className='container'>
      <div className="flex flex-wrap">
         {data?.map(prod=><Productitem prod={prod} key={prod._id}></Productitem>)}
      </div>
    </div>
  )
}




















// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Productitem from './Productitem'
// import Loading from './Loading'
// export default function FeaturedProduct() {

//   const [productArr, setProductArr] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [errMsg, setErrMsg] = useState('')

//   async function getProducts() {
//     try {
//       let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//       setProductArr(data.data)
//       setErrMsg('')
//       setLoading(false)
//     } catch (error) {
//       setErrMsg(error.message)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getProducts()
//   }, [])

//   if (errMsg) {
//     return <h2>{errMsg}</h2>
//   }

//   return (
//     <div className='container mx-auto px-4 dark:text-white'>
//       <div className="flex flex-wrap ">
//         {productArr.length ? productArr.map(prod => <Productitem prod={prod} key={prod._id}></Productitem>) : <Loading></Loading>}
//       </div>
//     </div>
//   )
// }
