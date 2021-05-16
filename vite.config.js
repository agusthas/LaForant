import { resolve } from 'path';
import { defineConfig } from 'vite';
import compress from 'vite-plugin-compress';

export default defineConfig({
  plugins: [
    compress({
      verbose: true,
      brotli: false,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        requirement: resolve(__dirname, 'requirement.html'),
      },
    },
  },
});
