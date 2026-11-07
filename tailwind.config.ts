import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { night: "#050816", ink: "#0b1030", saffron: "#ff9933", gold: "#ffcf5a", ember: "#ff6a1a" },
      fontFamily: { display: ["var(--font-display)", "serif"], body: ["var(--font-body)", "serif"] },
    },
  },
  plugins: [],
};
export default config;
