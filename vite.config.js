import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: true, // Listen on all addresses
    port: 5173, // Explicit port for nginx proxy
    allowedHosts: [
      'andalus-sweets.com',
      'www.andalus-sweets.com',
      'localhost',
      '.localhost'
    ],
    watch: {
      // ignore editor/IDE temp folders and common cache dirs to avoid
      // unnecessary HMR rebuilds when those tools touch files
      ignored: ['**/.vscode-server/**', '**/.git/**', '**/.cache/**', '**/.DS_Store']
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // Server and preview configs removed
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
