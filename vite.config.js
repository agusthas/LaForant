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
        maps: resolve(__dirname, '/html/maps.html'),
        agents: resolve(__dirname, '/html/agents.html'),
        requirement: resolve(__dirname, '/html/requirement.html'),
        register: resolve(__dirname, '/html/register.html'),
      },
    },
  },
});
