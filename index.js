var requireAll = require('./lib/require_all');

module.exports = {
  requireAll: requireAll,
  crypt: requireAll(__dirname + '/lib/crypt')
};
