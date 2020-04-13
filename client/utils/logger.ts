import { isNode, isPro } from './env';
import { Configuration } from 'log4js';

interface Log {
  app: any;
  document: any;
}

const config: Configuration = {
  appenders: {
    NextAccess: {
      type: isPro ? 'dateFile' : 'console',
      filename: 'logs/next-access.log',
      compress: true,
      layout: {
        type: 'pattern',
        pattern: '%d %p %c %m',
      },
    },
    error: {
      type: isPro ? 'dateFile' : 'console',
      filename: 'logs/next-error.log',
      compress: true,
      layout: {
        type: 'pattern',
        pattern: '%d %p %c %m',
      },
    },
    NextError: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['NextAccess', 'NextError'],
      level: 'info',
    },
  },
};

let logger: Log = {
  app: console,
  document: console,
};

if (isNode) {
  const log4js = require('log4js');
  log4js.configure(config);
  logger = {
    app: log4js.getLogger('app'),
    document: log4js.getLogger('document'),
  };
}

export const app = logger.app;
export const document = logger.document;
export default logger;
