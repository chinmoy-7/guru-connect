/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight:{
        '65':"75vh",
        '45':"45vh",
        '50':"45vh",
        "35":"35vh",
        "10":"10vh",
      },
      height:{
        '65':'65vh',
        '75':'85vh',
        "60":"70vh",
        "90":"88vh",
        "55":"55vh",
        "341":"45vh",
      },
      width:{
        '98':'98%',
        "81":'81%',
        "40":'48%',
        "38":'38%',
        "25":"25%"
      },  
      colors:{
        'rgba-purple': 'rgba(235, 0, 255, 0.09) 25%',
        'rgba-purple-opp': 'rgba(235, 0, 255, 0.09) 95%',
        'rgba-purple-btn': 'rgba(235, 0, 255, 0.08) 55%',
        'newpurple':"#7B13BB",
        'card':"#E2CCF0",
        "card-text":"#956cb9"
      },
      backgroundImage:{
        "section1":"url('../public/section1g.png')",
        "section2":"url('../public/section2.png')"
      },
      fontFamily:{
        'Inter':['Inter','sans-serif']
      },
      backgroundPosition:{
        'section-right':"right 50px bottom 30px"
      }
      
    },
  },
  plugins: [],
}

