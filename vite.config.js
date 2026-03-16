import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },

  base: '/stha4us.github.io/',

  // Server configuration
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      // Proxy API requests to Django backend
      '/api': {
        target: 'http://stha4us.github.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'api-vendor': ['axios'],
        },
      },
    },
  },

  define: {
  'process.env': {},
},

  // Environment variables prefix
  envPrefix: 'VITE_',
});