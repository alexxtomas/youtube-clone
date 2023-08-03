import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@router': path.resolve(__dirname, './src/router'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@views': path.resolve(__dirname, './src/views'),
      '@validations': path.resolve(__dirname, './src/validations'),
      '@listeners': path.resolve(__dirname, './src/listeners'),
      '@logic': path.resolve(__dirname, './src/logic'),
      '@store': path.resolve(__dirname, './src/store'),
      '@controllers': path.resolve(__dirname, './src/controllers'),
      '@content-loaders': path.resolve(__dirname, './src/content-loaders')
    }
  }
})
