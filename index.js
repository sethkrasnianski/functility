var require_all = require('./lib/require_all');

module.exports = {
  require_all: require_all,
  crypt: require_all(__dirname + '/lib/crypt')
};
