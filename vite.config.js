import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build with the repo subpath so assets are referenced as /PrepStack/...
export default defineConfig({
  base: '/PrepStack/',
  plugins: [react()],
})
