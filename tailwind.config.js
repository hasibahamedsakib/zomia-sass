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
        slateBlue: ["#8776FA"],
      },
      boxShadow: {
        "3xl": "2px 10px 50px rgb(158 158 158 / 43%)",
        bxl: "2px 10px 50px rgb(158 158 158 / 14%)",
        blg: " 0px 8px 60px rgb(243 242 255)",
        hblg: "0 2px 4px #0003",
      },
      padding: {
        pxl: "30px 33px 15px 33px",
        spxl: "15px 10px 7px 16px",
      },
      margin: {
        mxl: "0 50px 30px 0",
        smxl: "0 25px 15px 0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
