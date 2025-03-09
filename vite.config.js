import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // Make sure no "external" configuration is needed for react-router-dom
  // If you had something like this:
  // build: {
  //   rollupOptions: {
  //     external: ['react-router-dom'],
  //   },
  // },
});