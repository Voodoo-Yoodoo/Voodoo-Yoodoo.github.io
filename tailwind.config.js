import tailwindClipPath from "tailwind-clip-path";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: "100dvh",
      fontFamily: {
        title: ["var(--font-title)"],
        page: ["var(--font-page)"],
      },
      colors: {
        "voodoo-orange": "#D08000",
        "voodoo-purple": "#60099C",
        "voodoo-green": "#167701",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [tailwindClipPath],
};
