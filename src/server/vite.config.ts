import { defineConfig } from 'vite';
import { resolve } from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = defineConfig({
  mode: NODE_ENV,
  build: {
    outDir: resolve('./dist/server'),
    ssr: './src/server/index.ts',
  },
  server: {
    port: 9000,
    host: '0.0.0.0',
  },
  plugins: [],
});

export default config;
