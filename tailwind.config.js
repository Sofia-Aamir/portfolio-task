module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom colors, spacing, and other utilities here if needed.
      colors: {
        darkBg: '#1a202c', // Example dark background color
        darkText: '#f7fafc', // Example light text for dark mode
      },
    },
  },
  plugins: [],
}
