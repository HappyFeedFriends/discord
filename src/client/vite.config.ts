import { defineConfig, Plugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';
const env = loadEnv(NODE_ENV, process.cwd(), '');

/**
 * Плагин форматирующий подстроки в виде <%= <имя поля> %> в html шаблоне страницы.
 * @param data Обьект с форматируемыми полями из шаблона.
 * @return Конфиг плагина.
 */
const transformHtmlPlugin = (data: Record<string, string>): Plugin => ({
  name: 'transform-html',
  transformIndexHtml: {
    order: 'pre',
    handler: html => html.replace(/<%=\s*(\w+)\s*%>/gi, (_, key) => data[key] || ''),
  },
});

const config = defineConfig({
  root: './src/client',
  mode: NODE_ENV,
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  base: './',
  build: {
    outDir: resolve('./dist/client'),
  },
  define: {
    ...Object.keys(env).reduce(
      (prev, key) => {
        prev[`process.env.${key}`] = JSON.stringify(env[key]);
        return prev;
      },
      {} as Record<string, string>,
    ),
  },
  plugins: [
    svgr({
      include: './src/client/**/*.svg',
    }),
    react(),
    transformHtmlPlugin({
      name: `[dev] ${env.APP_NAME}`,
    }),
  ],
});

export default config;
