/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {  
      height: {
      '90': '90%', // Custom height value
      '500px': '500px'
    },
    width:{
         '600px': '500px'
    },
    backgroundColor: {
      'fontColor': '#2D2B2B',
      'btnColor': '#D39738',
      'secondary': '#FFF2E2',
      'backgroundColor': '#FFFBF7',
      'headerBg': '#FFF0DC',
      'inputBg': '#6B8A7A'
      
    },
    fontFamily: {
      gatile: ['Gatile']
    },
    backgroundImage: {
      'hero-Bg': "url('/assest/landingBG.jpg')",
      
    },
    textColor:{
      "darkColor": "#3B3030"
    },
    fontSize:{
      '3rem': '2.5rem'
    },
  },
  },
  plugins: [],
}

