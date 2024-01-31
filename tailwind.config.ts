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
        redColor: "#d01f39",
        yellowColor: "#fdc500",
        greenColor: "#006c3e",
      },
    },
  },
  plugins: [],
};
export default config;
