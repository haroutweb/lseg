import log4js from 'log4js';

log4js.configure({
  appenders: {
    out: { type: 'stdout', layout: { type: 'colored' } },
  },
  categories: {
    default: { appenders: ['out'], level: 'debug' },
  },
});

const logger = log4js.getLogger(' ');

logger.level = 'debug';

export const getLogger = log4js.getLogger;

export default logger;
