import type { KnipConfig } from 'knip';

const knipCfg: KnipConfig = {
  entry: [
    'src/index.ts!',
  ],
  project: [
    'src/**/*.{js,ts,jsx,tsx}!',
    '!src/typings/**/*',
  ],
  ignoreDependencies: ['jest-junit', 'webpack-cli', '^eslint-.*'],
  rules: {
    unlisted: 'off',
  },
};

export default knipCfg;
