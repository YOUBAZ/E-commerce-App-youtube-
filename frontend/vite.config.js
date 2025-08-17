import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
      target: process.env.BASE_URL,
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
      
    },
  },
});
