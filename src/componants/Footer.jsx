import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-light-color h-[230px]'>
       
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
             
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
            </a>
            <span className='text-[#1D4ED8] font-extrabold text-2xl'>Route</span>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Nagy Osama™. All Rights Reserved.</span>
        </div>
      
    </footer>
  )
}
