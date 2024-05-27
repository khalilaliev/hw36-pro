/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      custom: "#343434",
    },
    extend: {
      container: {
        padding: "2rem",
      },
    },
  },
  plugins: [require("rippleui")],
};
