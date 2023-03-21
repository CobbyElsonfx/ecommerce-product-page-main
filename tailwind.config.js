/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
          "./*.html",
          "./**/*.js",

            ],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"

      },


    extend: {
      colors:{
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)"
        // black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
      }
    },
  },
  plugins: [],
}