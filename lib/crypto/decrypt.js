const { createDecipheriv } = require('crypto');
const { algorithm, key, iv } = require('./seeds');

module.exports = function decrypt(text) {
  const iv = Buffer.from(text.iv, 'hex');
  const encryptedText = Buffer.from(text.encryptedData, 'hex');
  const decipher = createDecipheriv(algorithm, Buffer.from(key), iv);
  const updatedDecipher = decipher.update(encryptedText);
  const decrypted = Buffer.concat([updatedDecipher, decipher.final()]);
  return decrypted.toString();
}
