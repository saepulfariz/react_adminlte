import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'react_adminlte', // bentrok jika pake router biasa
  resolve: {
    alias: {
      // jquery: 'jquery/dist/jquery.slim.js',
    },
  },
})