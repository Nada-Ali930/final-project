import React, { useContext } from 'react'
import FeaturedProduct from './FeaturedProduct'
import Header from './Header'
import Categories from './Categories'
import  { counterContext } from '../Context/CounterContext'
import {Helmet} from "react-helmet";
export default function Home() {
  

  return (
    <div className=''>
      

       <Helmet>
          <meta charSet="utf-8" />
          <title>home componant</title>
       </Helmet>
       <Header></Header>
       <Categories></Categories>
       <FeaturedProduct></FeaturedProduct>
    </div>
  )
}
