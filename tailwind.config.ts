import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        cream: {
          50: "#FDFBF7",
          100: "#FAF5EC",
          200: "#F3EADB",
          300: "#E8DAC2",
        },

        ink: {
          50: "#F6F5F4",
          100: "#E7E5E1",
          300: "#A8A29B",
          500: "#6B645C",
          700: "#3D3833",
          800: "#282420",
          900: "#17140F",
        },

        saffron: {
          50: "#FFF8ED",
          100: "#FFEDD3",
          200: "#FED8A6",
          300: "#FDBB6E",
          400: "#FB9434",
          500: "#F97510",
          600: "#EA5A06",
          700: "#C24208",
          800: "#9A350F",
          900: "#7C2D10",
        },

        moss: {
          50: "#F2F7F2",
          100: "#DFEADF",
          400: "#6E9A72",
          600: "#3F6B4A",
          800: "#26412E",
        },

        // Legacy tokens kept so older markup keeps rendering.
        primary: "#F97510",
        secondary: {
          50: "#FD7F2C",
          100: "#FD9346",
          200: "#FDA766",
        },
        ter: {
          50: "#3D3833",
          100: "#C24208",
          200: "#17140F",
          300: "#F3EADB",
        },
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(23 20 15 / 0.06), 0 12px 32px -12px rgb(23 20 15 / 0.12)",
        lift: "0 8px 20px -6px rgb(23 20 15 / 0.12), 0 28px 60px -24px rgb(23 20 15 / 0.24)",
        glow: "0 12px 40px -12px rgb(249 117 16 / 0.45)",
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 24px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.12) translate3d(0, -1.5%, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(200%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "scroll-cue": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "ken-burns": "ken-burns 18s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
