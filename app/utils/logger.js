var log4js = require('log4js');

log4js.configure('./config/logger.json');

module.exports = { 
  query: log4js.getLogger('query'),
  app: log4js.getLogger('app'),
  access: log4js.getLogger('access'),
  express: log4js.connectLogger(log4js.getLogger('access'), {level: log4js.levels.INFO})
};
