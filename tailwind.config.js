/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}" , "./js/*.js"],
  theme: {
    extend: {  
      height: {
      '90': '90%', // Custom height value
      '500px': '500px',
      'divHeight': '909px'
    },
    width:{
         '600px': '500px',
         '48%':'48%',
         '90': '90%', // Custom height value
         'divWidth': '1750px'
    },
    backgroundColor: {
      'fontColor': '#2D2B2B',
      'btnColor': '#D39738',
      'secondary': '#FFF2E2',
      'backgroundColor': '#FFFBF7',
      'headerBg': '#FFF0DC',
      'inputBg': '#6B8A7A',
      'profileSection': '#6B8A7A',
      'lightBg': '#FFF3E0',
      'darkBg': '#3B3030',
      'recipelistBg': '#80552A',
      
      
    },
    fontFamily: {
      gatile: ['Gatile', 'sans']
    },
    backgroundImage: {
      'hero-Bg': "url('/assets/images/landingBG.jpg')",
      'adobo': "url('/assets/images/adobo.jpg')",
      'Sinigan': "url('/assets/images/Sinigang na Baboy.jpg')",
      'kareKare': "url('/assets/images/Kare-Kare.jpg')",
      'LechoKawali': "url('/assets/images/Lechon Kawali.jpg')",
      'Pancit-Canton': "url('/assets/images/Pancit Canton (Stir-Fried Noodles).jpg')",
      'Tinola': "url('/assets/images/Tinola.jpg')",
      'BicolExpress': "url('/assets/images/Bicol Express.jpg')",
      'LumpiangShanghai': "url('/assets/images/Lumpiang Shanghai.jpg')",
      'Halo-Halo': "url('/assets/images/Halo-Halo.jpg')",
       'Bulalo': "url('/assets/images/Bulalo.jpg')",
      
    },
    textColor:{
      "darkColor": "#3B3030",
      'beige': '#FFF2E2',
    },
    fontSize:{
      '3rem': '2.5rem'
    },
    keyframes:{
      'slide': {
        '0%':{ transform: 'translateX(0)' },
        '10%':{ transform: 'translateX(0)' },
        '20%':{ transform: 'translateX(-100%)' },
        '30%':{ transform: 'translateX(-200%)' },
        '40%':{ transform: 'translateX(-300%)' },
        '50%':{ transform: 'translateX(-400%)' },
        '60%':{ transform: 'translateX(-500%)' },
        '70%':{ transform: 'translateX(-600%)' },
        '80%':{ transform: 'translateX(-700%)' },
        '90%':{ transform: 'translateX(-800%)' },
        '100%': { transform: 'translateX(-900%)' },
       
      },
      'reviewSlideLeft': {
        '0%':{ transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      'reviewSlideRight': {
        '0%':{ transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    animation:{
      slide: 'slide 32s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
      reviewSlideLeft: 'reviewSlideLeft 2s ease-in-out  ',
      reviewSlideRight: 'reviewSlideRight 2s ease-in-out  ',
    },
    boxShadow:{
      'reviews': '10px 8px 10px #09122C'
    }
    
  },
  },
  plugins: [],
}

