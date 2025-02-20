/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite//*.js",
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
   
    screens: {
     'sm': '640px',
     'md': '768px',
     'lg': '1024px',
     'xl': '1280px',
     '2xl': '1560px',
   },
    extend: { colors:{
      'green-color':'#0aad0a',
      'light-color':'#f0f3f2',
      'rating-color':'#ffc908',
 },},
  },
  plugins: [require('flowbite/plugin')],
  darkMode:'class'
}


