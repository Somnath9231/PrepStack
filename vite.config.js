import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Always use /prepstack/ for GitHub Pages (lowercase repo name)
  base: '/prepstack/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  // Ensure public assets are copied correctly
  publicDir: 'public',
});
