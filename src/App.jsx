import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componants/Layout'
import Home from './componants/Home'
import Login from './componants/Login'
import Register from './componants/Register'
import Products from './componants/Products'
import Categories from './componants/Categories'
const Brands = lazy(() => import('./componants/Brands'));
// import Brands from './componants/Brands'
import Notfound from './componants/Notfound'
import Cart from './componants/Cart'
import CounterContectProvider from './Context/CounterContext'
import ProtectedRoute from './componants/ProtectedRoute'
import ProductDetails from './componants/ProductDetails'
import Orders from './componants/Orders'
import Loading from './componants/Loading'
import Parent from './memoization/Parent'
import BrandProducts from './componants/BrandProducts'
import ForgetPassword from './componants/ForgetPassword'
import CatagoryComponant from './componants/CatagoryComponant'
import CategoryProducts from './componants/CatagoryProducts'
import ResetPassword from './componants/ResetPassword'
import VerifyCode from './componants/VerifyCode'


export default function App() {

  let routes = createBrowserRouter([{
    path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'/login',element:<Login></Login>},
      {path:'/register',element:<Register></Register>},
      {path:'/products',element:<Products></Products>},
      {path:'/forgot-password',element:<ForgetPassword></ForgetPassword>},
      {path:'/verify-code',element:<VerifyCode></VerifyCode>},
      {path:'/reset-password',element:<ResetPassword></ResetPassword>},
      {path:'/brands/:brandId',element:<BrandProducts></BrandProducts>},
      {path:'/categories/:categoryId',element:<CategoryProducts></CategoryProducts>},
      {path:'/productDetails/:id/:catId',element:<ProductDetails></ProductDetails>},
      {path:'/cart',element:<ProtectedRoute><Cart></Cart></ProtectedRoute>},
      {path:'/categories',element:<CatagoryComponant></CatagoryComponant>},
      {path:'/allorders',element:<Orders></Orders>},
      {path:'/brands',element:<Suspense fallback={<Loading></Loading>}><Brands></Brands></Suspense>},
      {path:'*',element:<Notfound></Notfound>},
    ]
  }])
  return (
    // <div className="">
    // <Brands></Brands>
    // </div>
    <RouterProvider router={routes}>App</RouterProvider>
    // <Parent></Parent>
    // <CounterContectProvider><RouterProvider router={routes}>App</RouterProvider></CounterContectProvider>
  )
}
