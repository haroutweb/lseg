import dotenv from 'dotenv';
const envPath = process.env.APP_ENV ? `.env.${process.env.APP_ENV}` : '.env';
dotenv.config({ path: envPath });
import logger from './services/logger';
import { server } from './initExpress';
import './initRoutes';

const port = process.env.PORT;

server.listen(port, () => {
  logger.info(`App v1.0 listening port ${port}!`);
  logger.info('....');
});
