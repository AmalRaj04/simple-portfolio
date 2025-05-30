/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#00ffd1",
        textPrimary: "#f4f4f4",
        textSecondary: "#aaaaaa",
        divider: "#222222",
        dark: {
          DEFAULT: "#111111",
          lighter: "#222222",
          light: "#333333"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 