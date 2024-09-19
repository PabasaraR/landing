/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        shadowPulse: {
          "0%, 100%": { textShadow: "0 0 10px rgba(235, 193, 247,0.2)" },
          "50%": { textShadow: "0 0 20px rgba(235, 193, 247,0.8)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        fadeInOut: "fadeIn 2s ease-in-out, fadeOut 2s ease-in-out 3s",
        shadowPulse: "shadowPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
