import { Env } from '@humanwhocodes/env';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { resolve } from 'path';

const NODE_ENV = process.env.NODE_ENV;

const env = new Env(
  dotenv.config({
    path: resolve(`.env.${NODE_ENV}`),
  }).parsed,
);
/**
 * Создаёт сервер для работы с АПИ.
 * @return Сервер.
 */
const createServer = async () => {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  const port = env.require('SERVER_PORT');

  app.use(vite.middlewares);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (_, res) => res.send('Received a GET HTTP method') as any);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.info(`Main server started on port ${port}`);
  });
  return app;
};

createServer();
