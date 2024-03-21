/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js, html}"],
  theme: {
    fontFamily: {
      DM: ["DM Sans"],
      Mulish: ["Mulish"],
    },
    extend: {
      lineHeight: {
        "banner-content": "0.9776",
        "banner-p": "1.3",
        "banner-btn": "64px",
      },
    },
    colors: {
      "btn-text": "#171C26",
      "btn-bg": "#01AA8D",
    },
  },
  plugins: [],
};
