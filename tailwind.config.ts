import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#351F4B",
      secondary: "#84DCDE",
      "text-secondary": "#5CB4B6",
      "system-dark": "#656565",
      "system-gray": "#818184",
      "background-gray": "#F1F5F9",
      "border-gray": "#D2D2D2",
      "border-table-gray": "#E5E4E4",
      white: "#FFFFFF",
      go: "#03D88A",
      "hover-gray": "#E3E3E3",
      "light-gray-background": "#FAFAFA",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
