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
        maps: resolve(__dirname, '/pages/maps.html'),
        agents: resolve(__dirname, '/pages/agents.html'),
        requirement: resolve(__dirname, '/pages/requirement.html'),
        register: resolve(__dirname, '/pages/register.html'),
      },
    },
  },
});
