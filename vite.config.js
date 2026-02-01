import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Always use /PrepStack/ for GitHub Pages (match repo name case)
  base: '/PrepStack/',
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
