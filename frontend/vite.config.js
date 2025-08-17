import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": process.env.BASE_URL,
      "/uploads/": process.env.BASE_URL,
    },
  },
});
