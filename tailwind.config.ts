import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TikTok Sans"', "sans-serif"],
      },
      colors: {
        orange: {
          solid: "var(--orange-solid)",
          light: "var(--orange-light)",
          glass: "var(--orange-glass)",
          "glass-light": "var(--orange-glass-light)",
        },
        aqua: {
          solid: "var(--aqua-solid)",
          light: "var(--aqua-light)",
          glass: "var(--aqua-glass)",
          "glass-light": "var(--aqua-glass-light)",
        },
        rose: {
          solid: "var(--rose-solid)",
          light: "var(--rose-light)",
          glass: "var(--rose-glass)",
          "glass-light": "var(--rose-glass-light)",
        },
        "bg-dark": "var(--bg-dark)",
        "fg-dark": "var(--fg-dark)",
        "bg-light": "var(--bg-light)",
        "fg-light": "var(--fg-light)",
        glass: "var(--glass)",
      },
      borderRadius: {
        outer: "5px",
        inner: "10px",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(30deg, #FF6A00 -30%, #FF8834 65%)",
        "aqua-gradient": "linear-gradient(30deg, #87CEFA -30%, #C0E1F5 65%)",
        "rose-gradient": "linear-gradient(30deg, #E100FF -30%, #EA4DFF 65%)",
      },
    },
  },
  plugins: [],
};
export default config;
