/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        volta: {
          dark: "#06080F",       // 60% Dominante noir profond
          surface: "#09314A",    // 30% Bleu nuit technique
          surfaceLight: "#0E4363",
          surfaceDark: "#041B2B",
          yellow: "#FFFA08",     // 10% Accent jaune électrique
          yellowHover: "#E6E107",
          border: "rgba(9, 49, 74, 0.4)",
          borderGlow: "rgba(255, 250, 8, 0.25)",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        'pulse-once': 'pulseOnce 1.2s cubic-bezier(0, 0, 0.2, 1) 1 forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        pulseOnce: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
