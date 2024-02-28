import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "resistor-brown": "#8b4513",
        "resistor-red": "#ff0000",
        "resistor-orange": "#ff7f00",
        "resistor-yellow": "#ffff00",
        "resistor-green": "#00ff00",
        "resistor-blue": "#0000ff",
        "resistor-purple": "#4b0082",
        "resistor-gray": "#808080",
        "resistor-white": "#ffffff",
        "resistor-silver": "#c0c0c0",
        "resistor-gold": "#deb900",

        "resistor-wire": "#c0c0c0",
      }
    },
  },
  variants: {
    extend: {
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
    },
  },
  plugins: [],
};
export default config;
