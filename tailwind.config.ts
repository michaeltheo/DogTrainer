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
          50: "#FDF7FB",
          100: "#F5E6F0",
          200: "#EDD0E3",
          300: "#E4B9D5",
          400: "#D8A7C3",
          500: "#C891B0",
          600: "#B67B9D",
          700: "#9B6684",
          800: "#7D526B",
          900: "#2D1B2E",
        },
        accent: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316", // Orange 500
          600: "#EA580C", // Orange 600
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        purple: {
          50: "#F9F7FB",
          100: "#F0EBF5",
          200: "#DFD4E8",
          300: "#CEBDDB",
          400: "#B89FC9",
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
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            warning: {
              50: "#FFF7ED",
              100: "#FFEDD5",
              200: "#FED7AA",
              300: "#FDBA74",
              400: "#FB923C",
              500: "#F97316",
              600: "#EA580C",
              700: "#C2410C",
              800: "#9A3412",
              900: "#7C2D12",
              DEFAULT: "#F97316",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};

export default config;
