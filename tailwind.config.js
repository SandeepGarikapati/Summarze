/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This will include all js, ts, jsx, and tsx files in the src directory.
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      zIndex: {
        '-1':'-1',
        '1':'1',
        '3':'3',
        '2':'2',

      }
    },
  },
  plugins: [],
}
