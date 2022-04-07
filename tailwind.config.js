module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "palette-darker": "#0F0E0E",
        "palette-black": "#191A19",
        "palette-yellow": "#D89216",
        "palette-lightyellow": "#F0C929",
        "palette-darkgray": "#2B2B2B",
        "palette-white": "#ECF0F1",
        "palette-gray": "#C4CBCD",
        "palette-blue": "#2D31FA",
        "palette-darkblue": "#051367",
        "palette-litghblue": "#5D8BF4"
      },
      fontFamily:{
        "oswald":['Oswald', 'sans-serif'],
        "raleway":['Raleway', 'sans-serif']
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}
