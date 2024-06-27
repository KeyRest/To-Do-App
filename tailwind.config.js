/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        'g-blue': 'rgba(86, 119, 252, 1)',
        'g-red': 'rgba(219,68,55,1)',
        'g-yellow': 'rgba(244,160,0,1)',
        'g-green': 'rgba(15,157,88,1)',
        'discord-blue': 'rgba(86,119,252,1)',
        'discord-gray': 'rgba(45,44,44,1)',
      },
      scale: {
        '175': '1.75',
      },
      screens: {
        '3xl': '1900px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [animations],
}

