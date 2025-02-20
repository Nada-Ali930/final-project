import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

export default function Categories() {
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,//seven imeges 
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false
  };

     let [cats,setCats] = useState([])
   async function getCat(){
     let {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      setCats(data.data)
   }
    
     useEffect(()=>{
      getCat()
     },[])



  return (
    <div className='my-12 container'>
      <Slider {...settings}>
         {cats.map(ele=><CatItem key={ele._id} ele={ele}></CatItem>)}
      </Slider>
    </div>
  )
}

function CatItem({ele}){
    return <div className='hidden md:block'>
        <img src={ele.image} className='h-[200px] object-cover'/>
    </div>
}