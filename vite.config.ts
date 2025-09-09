import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist", // 👈 important: clean output folder for Vercel
    emptyOutDir: true,
  },
  base: "./", // 👈 ensures assets resolve correctly on Vercel
})
