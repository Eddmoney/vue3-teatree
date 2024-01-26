import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), commonjs({
    requireReturnsDefault: 'auto'
  })],
  resolve: {
    extensions: [".ts", ".vue"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'vue3-teatree',
      fileName: (format) => `vue3-teatree.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

})
