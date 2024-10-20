import { defineConfig } from 'vite';
import { resolve } from 'path';

const config = defineConfig({
  publicDir: false,
  build: {
    outDir: resolve('./dist/app'),
    ssr: './src/app/index.ts'
  }
});

export default config;
