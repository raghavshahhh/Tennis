import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tennis Green - Primary
        tennis: {
          50: '#e8f5ed',
          100: '#c5e6d1',
          200: '#9ed6b3',
          300: '#77c695',
          400: '#59ba7f',
          500: '#1F7A4D', // Primary
          600: '#1a6b43',
          700: '#155c39',
          800: '#104d2f',
          900: '#0b3e25',
        },
        // Sport Red - Secondary
        sport: {
          50: '#fce8e8',
          100: '#f8c5c5',
          200: '#f39e9e',
          300: '#ee7777',
          400: '#ea5a5a',
          500: '#C62828', // Secondary
          600: '#b52323',
          700: '#a41e1e',
          800: '#931919',
          900: '#821414',
        },
        // Dark Grey - Text
        dark: '#1F2933',
        // Off White - Background
        offwhite: '#F9FAF9',
        // Accent Blue
        accent: '#1E88E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
