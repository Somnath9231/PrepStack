import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Use /PrepStack/ for GitHub Pages, / for localhost
  base: process.env.NODE_ENV === 'production' ? '/PrepStack/' : '/',
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
