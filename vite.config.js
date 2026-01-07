import { defineConfig } from 'vite'

export default defineConfig({
  base: '/um840/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  css: {
    devSourcemap: true,
  }
})