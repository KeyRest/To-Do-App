/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {

      colors: {
        "discord-color": "#5677FC", // Discord blue for buttons
        "textColor": "#5677FC", //the color of blue-discord text
        "gray-background": "#2c2d2d", //gray-background color
      },


      fontFamily: {
        sans: ["Roboto, sans-serif"],
      },
      
    }
  },
  plugins: [],
}

