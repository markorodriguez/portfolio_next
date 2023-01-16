/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8c12f0',
        'gray-custom': 'rgba(255,255,255,0.15)',
        'secondary': '#f0f0f0',
        'dark': '#131212',
        'light': '#fff',
      }
    },
  },
  plugins: [],
}