var requireAll = require('./lib/require_all');

module.exports = {
  requireAll: requireAll,
  crypto: requireAll(__dirname + '/lib/crypto')
};
