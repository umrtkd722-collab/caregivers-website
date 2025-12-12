import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
        secondary: '#f59e0b',
        accent: '#3b82f6',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

