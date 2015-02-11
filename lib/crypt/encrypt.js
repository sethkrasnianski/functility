var crypto = require('crypto');
var KEY = process.env.CRYPTO_KEY || "qwertyuiop1234567890_+-=?><MNBhj";
var HMAC_KEY = process.env.CRYPTO_HMAC_KEY || "AS*&^123ywJk=-}{]>,;:~`1!2ksuU7&*";

module.exports = function (plain_text) {
  var IV = new Buffer(crypto.randomBytes(16));
  var cipher_text;
  var hmac;
  var encryptor;

  encryptor = crypto.createCipheriv('AES-256-CBC', KEY, IV);
  encryptor.setEncoding('hex');
  encryptor.write(plain_text);
  encryptor.end();

  cipher_text = encryptor.read();

  hmac = crypto.createHmac('SHA256', HMAC_KEY);
  hmac.update(cipher_text);
  hmac.update(IV.toString('hex'));

  return cipher_text + "$" + IV.toString('hex') + "$" + hmac.digest('hex')
};
