/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
          "./*.html",
          "./**/*.js",
          "./node_modules/flowbite/**/*.js"

            ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"

      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },


    extend: {
      colors:{
        red:"#dc2626",
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)"
        // black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
      }
    },
  },
 
}