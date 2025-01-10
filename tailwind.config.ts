import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sanf-serif'],
        general:['general','sanf-serif'],
        'circular-web':['circular-web','sanf-serif'],
        'robert-medium':['robert-medium','sanf-serif'],
        'robert-regular':['rebert-regular','sanf-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary:"#FF6200",

        secondary:{
          50:"#FD7F2C",
          100:"#FD9346",
          200:"#FDA766",

        },


        ter:{
          50:"#1B262C",
          100:"#0F4C75",
          200:"#3282B8",
          300:"#BBE1FA"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
