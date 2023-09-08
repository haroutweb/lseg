import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '\\.[jt]s$': 'babel-jest',
  },
  collectCoverageFrom: ['**/services/**/*.ts'],
  globalSetup: './setupTests.js',
  coverageThreshold: {
    global: {
      branches: 14.13,
      functions: 17.29,
      lines: 25.06,
      statements: 24.7,
    },
  },
};

export default config;
