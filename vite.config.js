import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // updated the port to 3000 instead of the default one, prefers to use 3000 for front end stuff
  server: {
    port: 3000,
  },
});
