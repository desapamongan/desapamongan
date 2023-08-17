/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  content: ["./src/**/*.{html,js}", "index.html", "budaya.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
    colors: {
      'primary': '#4E9882',
    },
    opacity: {
      '25': '.25',
    }
  },
  plugins: [],
}