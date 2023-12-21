import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      'firebase/app': 'firebase/app',
      'firebase/auth': 'firebase/auth',
      'firebase/firestore': 'firebase/firestore', // Agrega otros módulos de Firebase que puedas necesitar
    }
  }
});
