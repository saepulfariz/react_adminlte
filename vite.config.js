import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'


// const BASE_APP = process.env.BASE_APP;
// const BASE_APP =   import.meta.env.VITE_BASE_APP;

// import dotenv from 'dotenv';

// dotenv.config();

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