/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange-custom':{
          500:"#F9B234",
          400:"#FFC107",
          300:"#FFC42A"
        },
        'blue-custom':{
          100:"#4E90CC",
          200:"#2C358C",
        },
        green:"#051B16",
        gray:"#EAEAEF",
        primary:"#007BF1",
        'white-custom':"#FFFFFF",
        'gray-text':"#ADADAD",
        'black-custom':"#000000",
        'black-text-btn':"#051B16",
        'black-text-reviewer':"#1A1A1A",
        'active-link': "#FAC05B",
        'footer-border':"#B4A9A9",
        'bg-custom-gray':'#F8F9FA',
        'bg-modal':'#D9D9D9',
        'cart-btn-green':'#28A745',
        'cart-btn-red':'#FF2E2E',
        'cart-btn-gray':'#EAEAEF',
        'bg-checkout': '#F6F7FB',
        'eid-promo':'#E44002',
        'address-form':'#1A1A1A',
        'light-blue':'#39AFFF'
      },
      fontFamily: {
        lora: ['Lora','serif'],
        poppins: ['Poppins','serif'],
        roboto: ['Roboto','serif'],
        montserrat: ['Montserrat', 'serif'],
        inter:['Inter']
      },
      screens: {
        // xs: '480px', 
      },
      // plugins: [
      //   require('tailwindcss-dir')(), // Add this plugin for RTL support
      // ],
    },
  },
  plugins: [],
}

