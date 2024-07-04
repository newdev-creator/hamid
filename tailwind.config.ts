import { Zilla_Slab, Russo_One } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Zilla_Slab: ["zilla slab", "sans-serif"],
      Russo_One: ["russo one", "serif"],
    },
    extend: {
      colors: {
        white: "#F7F7F7",
        pink: "#DB2A6B",
        orange: "#FFB72B",
        yellow: "#FFE61B",
        green: "#B5FE83",
        blue: "#003366",
        fontBlack: "#0F172A",
        // gradient
        blue1: "#003366",
        blue2: "#0066CC",
        pink1: "#DB2A6B",
        pink2: "#751639"
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
