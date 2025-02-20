import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../assets/proj-imges/lightBg.png'
export default function Layout() {
  return (
    <div style={{backgroundImage:`url(${img})` }} className='flex flex-col justify-between min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
