module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nanum-pen": ["Nanum Pen Script", "cursive"],
        "noto-sans": ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
}
