import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: process.env.VITE_T_BACKEND,
    __APP_ENV2__: process.env.VITE_VERCEL_ENV,

  },
})
