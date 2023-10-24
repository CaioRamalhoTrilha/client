/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
}
