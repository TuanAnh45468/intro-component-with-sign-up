/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      red: "hsl(0, 100%, 74%)",
      green: "hsl(154, 59%, 51%)",
      blue: "hsl(248, 32%, 49%)",
      "dark-blue": "hsl(249, 10%, 26%)",
      "grayish-blue": "hsl(246, 25%, 77%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
