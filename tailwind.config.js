/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#01060C",
        gray: "#7A8A98",
        blue: "#EFF3F9",
        // gray: {
        //   DEFAULT: "#86868b",
        //   100: "#94928d",
        //   200: "#afafaf",
        //   300: "#42424570",
        // },
      }
    },
  },
  plugins: [],
}

