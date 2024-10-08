import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sass from "sass"
import { resolve } from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      // "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },

  server: {
    host: "0.0.0.0", // Permet à Vite d'écouter toutes les interfaces
    port: 5173,
  },
})
