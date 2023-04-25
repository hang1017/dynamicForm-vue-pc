import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

export default defineConfig({
  plugins: [
    VueJsx()
  ],
  server: {
    port: 3100
  },
  resolve: {
    alias: {
      "@alitajs/vdform": path.resolve(__dirname, "..", "src", "components")
    }
  }
})