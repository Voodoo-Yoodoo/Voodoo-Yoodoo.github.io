import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve("src"),
      "@components": resolve("src/components"),
      "@pages": resolve("src/pages"),
      "@routes": resolve("src/routes"),
      "@ui": resolve("src/ui"),
      "@utils": resolve("src/utils"),
    },
  },
});
