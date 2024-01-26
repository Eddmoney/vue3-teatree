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

})
