import type { KnipConfig } from 'knip';

const knipCfg: KnipConfig = {
  entry: [
    'src/{client,server,app}/{index,vite.config}.{ts,tsx}!',
  ],
  project: [
    'src/**/*.{js,ts,jsx,tsx}!',
    '!src/typings/**/*',
  ],
  ignoreDependencies: ['^eslint-.*'],
  rules: {
    unlisted: 'off',
    binaries: 'off'
  },
};

export default knipCfg;
