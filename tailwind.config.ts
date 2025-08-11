import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        facebook: "#3b5999",
        linkedin: "#0077b5",
        instagram: "#e4405f",
        primary: "#00D8D8",
      },
    },
  },
  plugins: [],
};
export default config;
