/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      width: {
        168: "42rem",
        200: "64rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
