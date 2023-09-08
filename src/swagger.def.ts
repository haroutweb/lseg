import { URL_PREFIX } from './utils/constants';
import { version } from '../package.json';
import { swEarningRouter } from './routes/earning';

const swagger = {
  openapi: '3.0.0',
  info: {
    title: 'LSEG API',
    version: version,
    description: 'The REST API service',
  },
  servers: [
    {
      url: process.env.APP_URL + URL_PREFIX,
      description: 'LSEG api',
    },
  ],
  paths: {
    ...swEarningRouter
  },
};

export default swagger;
