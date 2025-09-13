tailwind.config = {
  theme: {
    gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      
    },
    fontFamily: {
      Outfit: ['Outfit', "sans-serif"],
      Ovo: ['Ovo', "serif"]
    },
    boxShadow:  {
      'black': '4px 4px 0px 0px #000',
      'white': '4px 4px 0px 0px #fff'
    },
    colors:{
      darkTheme: '#11001F'
    }

  },
  darkMode: 'selector'
}