const requireAll = require('./lib/require-all');

module.exports = {
  requireAll: requireAll,
  crypto: requireAll('./lib/crypto')
};
