/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pinktext':'#da4f87',
          'imagebg':"#f2d184",
          'dribbble':"#a58039",
          'fontcolor': "#815d11",
          "petercolor":"#8b671a",
          "link":'#4b3b9b',
          "button":'#ea4b8b',
          "input":'#f3f3f3',
          "fadedtext":'#9d9d9f',
          'textfade':'#6a696e',
          'returnbg':'#f2f2f2'
      },
      fontFamily:{
        "Sacramento":["Sacramento", "cursive"]
      }
    },
  },
  plugins: [],
}