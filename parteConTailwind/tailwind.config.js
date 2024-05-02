/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {


      backgroundSign: {
        "gray-background": "#2c2d2d",
      },

      colors: {
        "background-color": "#5677FC",
        "textColor": "#5677FC",
      },


      mainFont: {
        "fontFamily": ['Roboto', 'sans-serif'],
      },

      active: {
        "color": "#5677FC",
        "text-decoration": "underline"
      }
    }
  },
  plugins: [],
}

