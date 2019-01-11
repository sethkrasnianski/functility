const { createCipheriv, update } = require('crypto');
const { algorithm, key, iv } = require('./seeds');

module.exports = function encrypt(text) {
  const cipher = createCipheriv(algorithm, Buffer.from(key), iv);
  const updatedCipher = cipher.update(text);
  const encryptedData = Buffer.concat([updatedCipher, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encryptedData.toString('hex') };
}
