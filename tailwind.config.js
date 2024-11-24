/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this to ensure Tailwind purges unused styles correctly
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
