import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xsm: "420px",
      sm: "640px",
      md: "768px",
      mmd: "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.25rem",
          sm: "2rem",
          lg: "0rem",
          xl: "0rem",
          "2xl": "0rem",
        },
      },
      colors: {
        "app-blue": "#1D3A8A",
        "app-yellow": "#FDDE6D",
        "app-light-blue": "#EEF5FA",
        "app-light-gray": "#F8FAFB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
