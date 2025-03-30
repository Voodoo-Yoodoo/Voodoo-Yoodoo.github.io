import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwind from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwind(), react()],
  resolve: {
    alias: {
      "@api": resolve("./src/api"),
      "@app": resolve("./src"),
      "@assets": resolve("./src/assets"),
      "@constants": resolve("./src/constants"),
      "@components": resolve("./src/components"),
      "@emails": resolve("./src/emails"),
      "@pages": resolve("./src/pages"),
      "@routes": resolve("./src/routes"),
      "@store": resolve("./src/store"),
      "@utils": resolve("./src/utils"),
      "@ui": resolve("./src/ui"),
    },
  },
});
