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
          DEFAULT: '0.25rem',
          sm: '2rem',
          lg: '0rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
      colors: {
        'app-blue': '#1D3A8A',
        'app-yellow': '#FDDE6D',
        'app-light-blue': '#EEF5FA',
        'app-light-gray': '#F8FAFB'

      },
      gridTemplateRows: {
        // Simple 8 row grid
        '5': 'repeat(8, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  safelist: [
    "bg-green-900",
    "bg-blue-700",
    "bg-sky-400",
    "bg-yellow-400",
    "bg-red-400",
  ],
};
export default config;
