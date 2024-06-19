import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend:{},
    colors:{
      primary: "#191A19",
      secondary: "#00224D",
      input:"#0A0B0A",
      focous: "#5D0E41",
      success: "#4E9F3D",
      information: "#125BB8",
      whiteColor: "#fff"
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
export default config;
