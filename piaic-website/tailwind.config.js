/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs:'320px',
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl:'2560px'
    },
    variants:{
      extend: {
        display:['group-foucs'],
        opacity:['group-foucs'],
        inset:['group-foucs']
        },
      },
    },
  plugins: [],
}