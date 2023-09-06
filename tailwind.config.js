/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        title: ["#1d2124"],
        subTitle: ["#1d2124"],
        Gray: ["#646464"],
        purple: ["#5a49f8"],
      },
      boxShadow: {
        "3xl": "2px 10px 50px rgb(158 158 158 / 43%)",
      },
    },
  },
  plugins: [],
};
