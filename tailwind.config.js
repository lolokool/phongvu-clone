/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        30: "30px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      colors: {
        blue: "#1435c3",
        white: "#ffffff",
        color01: "rgb(130, 134, 158);",
        color02: "#393939",
        lightGray: "#f5f5f5",
        gray: "#616161",
        color03: "#848788",
        color04: "#e9edf2",
      },
      spacing: {
        1200: "1200px",
        1232: "1232px",
        1264: "1264px",

        60: "60px",
        90: "-90px",
      },
      maxWidth: {
        main: "1200px",
        main1: "1264px",
        75.6: "75.6%",
        24.4: "24.4%",
        40.5: "40.5%",
      },
      lineHeight: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
