/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],

  theme: {
   
    extend: {
      colors: {
        primary : "rgba(6, 4, 17, 1)",
        navbarColor :"rgba(20,19,31,255)",
        contributeColor :"#2d2b36",
        welcome1 :"#A3B9F0",
        welcome2 :"#6946F7",
        y1 :"#FD4B61",
        y2 :"#A12244"
        
      },
      screens: {
        'min-sm': { 'min': '620px' }, 
        'min-md': { 'min': '700px' }, 
        'min-lg': { 'min': '1120px' }, 
        'min-xl': { 'min': '1770px' }, 


    },
    fontFamily:{
     primaryFont : ["Inter"]
    }
  
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

}