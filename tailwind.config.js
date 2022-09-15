/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-red-custom": "#F40404",
        darklight: "rgba(0,0,0, 0.6)",
        "bg-black-shadow": "#282828",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
