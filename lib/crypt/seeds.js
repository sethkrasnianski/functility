const { randomBytes } = require('crypto');

module.exports = {
  algorithm: 'aes-256-cbc',
  key: randomBytes(32),
  iv: randomBytes(16),
};
