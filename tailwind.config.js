/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/**/*.html","**/**/*.js", "**/**/**/*.hbs"],
  theme: {
    extend: {},
  },
  plugins: [
     // ...
     require('tailwindcss'),
     
     // ...
  ],
}

