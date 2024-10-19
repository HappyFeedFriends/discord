import { defineConfig } from 'vite';
import { resolve } from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = defineConfig({
  root: './src/server',
  mode: NODE_ENV,
  build: {
    outDir: resolve('./dist/server'),
  },
  server: {
    port: 9000,
    host: '0.0.0.0',
  },
  plugins: [],
});

export default config;
