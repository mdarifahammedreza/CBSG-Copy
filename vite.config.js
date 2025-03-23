import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig({
   // Base path for assets
  plugins: [react()],
  define: {
    global: 'window', // Ensures global compatibility
    process: { env: process.env }, // Polyfill for process
  },
});
