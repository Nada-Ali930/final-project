import React from 'react'
import Slider from 'react-slick'
import img1 from '../assets/proj-imges/vegatables.jpg'
import img2 from '../assets/proj-imges/cookies.jpg'
import img3 from '../assets/proj-imges/bread.jpg'
import img4 from '../assets/proj-imges/blog-img-1.jpeg'
import img5 from '../assets/proj-imges/shoclet.jpg'


export default function Header() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false
  };

  return (
    <header className='mb-3 mt-3 hidden md:block dark:bg-black dark:text-white'>
      <div className='flex container'>
        <div className="w-2/3">
          <Slider {...settings}>
            <img src={img1} className='h-[500px] object-cover '/>
            <img src={img2} className='h-[500px] object-cover ' />
            <img src={img3} className='h-[500px] object-cover' />
          </Slider>
        </div>
        <div className="w-1/3">
            <img src={img4} className='h-[250px] object-cover ' />
            <img src={img5} className='h-[250px] object-cover w-full' />
        </div>

      </div>
    </header>
  )
}
