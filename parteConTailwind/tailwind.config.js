/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {

      colors: {
        "discord-color": "#5677FC", // Discord blue for buttons
        "textColor": "#5677FC", //the color of blue-discord text
        "gray-background": "#2c2d2d", //gray-background color
        "gray-text" : "2c2d2d",
      },


      fontFamily: {
        sans: ["Roboto, sans-serif"],
      },
      
    }
  },
  plugins: [],
}

