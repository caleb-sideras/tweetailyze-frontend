/** @type {import('tailwindcss').Config} */
const { mauve, violet,blackA } = require('@radix-ui/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...blackA,
        'm-grey' : '#2d2f33',
        'l-grey' : '#353940',
        'd-grey' : '#1f1f1f',
        'vl-grey': '#c4c7c5',
        'm-blue' : '#0842a0',
        'd-blue' : '#004a77',
        'l-blue' : '#7fcfff',
        't-white': '#e3e3e3',
        'h-blue': '#c2e7ff',
        't-grey': '#8e918f',
        'b-blue': '#004a77'

      },
    },
  },
  plugins: [],
}

