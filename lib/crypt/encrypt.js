const { createCipheriv, update } = require('crypto');
const { algorithm, key, iv } = require('./seeds');

module.exports = function encrypt(text) {
  let cipher = createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}
