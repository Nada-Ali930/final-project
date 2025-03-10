import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { userToken } from '../Context/UserToken'
import axios from 'axios'
export default function Register() {

  let{setLogin} = useContext(userToken)

  let navigate = useNavigate()
   
   let[errMsg,setErrmsg] = useState('')
   let[loading,setLoading] = useState(false)

   async function handleRegister(values){
    setLoading(true)
    try{
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
      // console.log(data)
      if(data.message==='success'){
        localStorage.setItem('token',data.token)
          setLogin(data.token)
          navigate('/cart')

      }
      setLoading(false)
      setErrmsg('')
    }catch(error){
      setErrmsg('already exist')
      setLoading(false)
      console.log(error)
    }
   }
 
   let validationSchema = Yup.object().shape({
      name:Yup.string().min('2','too short').max('5','toolong').required('this field is required'),
      email:Yup.string().required('required').email('email not valid'),
      password:Yup.string().required('required').matches(/^[A-Z][a-z0-9]{2,5}$/),
      rePassword:Yup.string().oneOf([Yup.ref('password')],'repassword must be like password').required('required'),
      phone:Yup.string().required('required').matches(/^(01)[0-5][0-9]{8}$/)
   })

   let formik =useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },validationSchema
    ,
    onSubmit:handleRegister
   })




  return (
    <div className='container'>
      <h2 className='text-[1.5rem] font-bold my-3'>Register Now:</h2>
      
<form className="max-w-md mx-auto w-1/2 my-3 " onSubmit={formik.handleSubmit}>

    <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} type="text"  id="name" value={formik.values.name} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    
    {formik.errors.name && formik.touched.name ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.name}</span>
    </div>:''}

  <div className="relative z-0 w-full mb-5 group">
    <input onBlur={formik.handleBlur} type="email"  id="email" value={formik.values.email} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>

  {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.email}</span>
    </div>:''}
  {errMsg?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{errMsg}</span>
    </div>:''}

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" onBlur={formik.handleBlur}  id="password" value={formik.values.password} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>

  {formik.errors.password && formik.touched.password ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.password}</span>
    </div>:''}

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" onBlur={formik.handleBlur}  id="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>

  {formik.errors.rePassword && formik.touched.rePassword ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.rePassword}</span>
    </div>:''}

    <div className="relative z-0 w-full mb-5 group">
      <input type="tel" onBlur={formik.handleBlur}   id="phone" value={formik.values.phone} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>

    {formik.errors.phone && formik.touched.phone ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.phone}</span>
    </div>:''}
    
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {loading?<i className='fa-solid fa-spinner animate-spin text-white'></i>:'Register'}
    </button>
</form>


    
    </div>
  )
}



































//Native
// import React, { useState } from 'react'

// export default function Register() {

//   // let[fName,setFname]=useState('')
//   let[obj,setObj]=useState({
//     fName:'',
//     age:''
//   })
    
//   function changeName(e){
//     let newobj = {...obj}
//     newobj.fName =e.target.value
//     setObj(newobj)
//   }
//   function changeAge(e){
//     let newobj = {...obj}
//     newobj.age =e.target.value
//     setObj(newobj)
//   }

//   function submit(e){
//      e.preventDefault()  //reload
//      console.log(obj)
//   }

//   return (
//     <div className='bg-light-color p-20'onSubmit={submit}>
//       <form>Register
//          {/* <input type='text'name='fName' value={fName} onChange={(e)=>{setFname(e.target.value)}}/> */}
//          <input type='text'name='fName' value={obj.fName} onChange={changeName}/>
//          <input type='text'name='age'value={obj.age} onChange={changeAge}/>
//          <button>ok</button>
//       </form>
//     </div>
//   )
// }

// validation native
// function validation(values){
//   let errors ={}
//   if(!values.name)
//    errors.name = 'name is required'
//  else if(!/^[A-Z][a-z]{2,5}$/.test(values.name))
//    errors.name = 'name not valid'
//  if(!values.email)
//    errors.email = 'email is required'

//  return errors
// }


// let formik =useFormik({
//  initialValues:{
//    name:'',
//    email:'',
//    password:'',
//    rePassword:'',
//    phone:''
//  },validate:validation
//  ,
//  onSubmit:handleRegister
// })

{/* <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} type="text"  id="name" value={formik.values.name} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    
    {formik.errors.name && formik.touched ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.name}</span>
    </div>:''} */}