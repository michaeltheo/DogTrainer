import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF7FB", // Lightest pink
          100: "#F5E6F0", // Very light pink
          200: "#EDD0E3", // Light pink
          300: "#E4B9D5", // Soft pink
          400: "#D8A7C3", // Main pink
          500: "#C891B0", // Medium pink
          600: "#B67B9D", // Deep pink
          700: "#9B6684", // Darker pink
          800: "#7D526B", // Very dark pink
          900: "#2D1B2E", // Almost black purple
        },
        accent: {
          50: "#FFFBF0",
          100: "#FFF8E1",
          200: "#FFECB3",
          300: "#FFE082",
          400: "#FFD54F",
          500: "#F4C430", // Golden yellow
          600: "#FBC02D",
          700: "#F9A825",
          800: "#F57F17",
          900: "#E65100",
        },
        purple: {
          50: "#F9F7FB",
          100: "#F0EBF5",
          200: "#DFD4E8",
          300: "#CEBDDB",
          400: "#B89FC9", // Purple tint
          500: "#A485B8",
          600: "#8E6BA3",
          700: "#755688",
          800: "#5C416D",
          900: "#3D2B4A",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideInRight: "slideInRight 0.3s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
