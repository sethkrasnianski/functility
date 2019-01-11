const requireAll = require('./lib/require-all');

module.exports = {
  requireAll,
  crypto: requireAll('./lib/crypto')
};
