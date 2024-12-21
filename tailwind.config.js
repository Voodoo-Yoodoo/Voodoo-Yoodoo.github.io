import tailwindClipPath from "tailwind-clip-path";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: "100dvh"
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [tailwindClipPath],
};
