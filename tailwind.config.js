/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: 'Outfit, Segoe UI, sans-serif'
    },
    extend: {
      screens: {
        base: '0px'
      }
    },
  },
  plugins: [],
}

