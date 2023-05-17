/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: "Bangers",
        montserrat: "Montserrat",
        satisfy: "Satisfy",
      },
    },
  },
  plugins: [require("daisyui")],
};
