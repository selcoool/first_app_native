/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // 🎨 Màu sắc tùy chỉnh
      colors: {
        primary: "#1E40AF",
        secondary: "#F59E0B",
        danger: "#EF4444",
        success: "#10B981",
      },

      // 🅰️ Font chữ tùy chỉnh
      fontFamily: {
        inter: ["Inter"],
        pacifico: ["Pacifico"],
      },

      // 📐 Spacing mở rộng (padding, margin)
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },

      // ✨ Hiệu ứng animation
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "60%": { transform: "scale(1.05)", opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 10s ease-in-out",
        slideUp: "slideUp 15s ease-out",
        bounceIn: "bounceIn 20s ease-in-out",
      },

      // 🔠 Border radius mở rộng
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

