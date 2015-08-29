var crypto = require('crypto');
var KEY = process.env.CRYPTO_KEY || 'qwertyuiop1234567890_+-=?><MNBhj';
var HMAC_KEY = process.env.CRYPTO_HMAC_KEY || 'AS*&^123ywJk=-}{]>,;:~`1!2ksuU7&*';

module.exports = function(plainText) {
  var IV = new Buffer(crypto.randomBytes(16));
  var cipherText;
  var hmac;
  var encryptor;

  encryptor = crypto.createCipheriv('AES-256-CBC', KEY, IV);
  encryptor.setEncoding('hex');
  encryptor.write(plainText);
  encryptor.end();

  cipherText = encryptor.read();

  hmac = crypto.createHmac('SHA256', HMAC_KEY);
  hmac.update(cipherText);
  hmac.update(IV.toString('hex'));

  return cipherText + '$' + IV.toString('hex') + '$' + hmac.digest('hex');
};
