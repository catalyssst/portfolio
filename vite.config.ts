import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  // Set base path for GitHub Pages project site deployment.
  base: command === "build" ? "/CATALIST-PORTFOLIO/" : "/",
  plugins: [react(), tailwindcss()],
}));
