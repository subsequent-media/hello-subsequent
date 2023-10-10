import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [{
    pattern: /bg-.*/
  }],
  theme: {
    extend: {},
    animation: {
      'slide-left': 'slide-left 2s infinite ease-in',
    },
    keyframes: {
      'slide-left': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      }
    }
  },
  plugins: [],
} satisfies Config;
