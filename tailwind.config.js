/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3",
        secondary: "#03045E",
        tertiary: "#0077B6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #CAF0F8",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};

