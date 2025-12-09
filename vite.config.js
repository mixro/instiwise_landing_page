import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Setting host to `true` or '0.0.0.0' allows access from network IP
    host: true, 
  },
})
