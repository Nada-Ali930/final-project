import React, { useContext } from 'react'
import { counterContext } from '../Context/CounterContext'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Productitem from './Productitem'
import Loading from './Loading'
import useProduct from '../hooks/useProduct'

export default function Products() {

   
   
  let {data,isError,isLoading,error,isFetching} = useProduct()
    
  if(isLoading)
    return <Loading></Loading>

  if(isError)
    return <h2>{error.message}</h2>
  //  console.log(obj?.data?.data)
  return (
    <div className='container'>
      <div className="flex flex-wrap">
         {data?.map(prod=><Productitem prod={prod} key={prod._id}></Productitem>)}
      </div>
    </div>
  )
}




