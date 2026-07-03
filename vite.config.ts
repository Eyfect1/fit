import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для GitHub Pages задайте base при сборке, например:
// VITE_BASE=/имя-репозитория/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
