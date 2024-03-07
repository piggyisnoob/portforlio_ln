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
        "lngradient-45": "linear-gradient(45deg, #00abf0, #006e9a)",
      },
      boxShadow: {
        "lnshadow-90": "linear-gradient(90deg, #fff, #ddd)",
      },
      borderRadius: {
        "lg-6": "0.6rem", 
      },
    },
  },
  plugins: [],
};
export default config;
