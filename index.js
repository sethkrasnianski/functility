const requireAll = require('./lib/require_all');

module.exports = {
  requireAll: requireAll,
  crypto: requireAll('./lib/crypto')
};
