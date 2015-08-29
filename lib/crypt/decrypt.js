var crypto = require('crypto');
var KEY = process.env.CRYPTO_KEY || "qwertyuiop1234567890_+-=?><MNBhj";
var HMAC_KEY = process.env.CRYPTO_HMAC_KEY || "AS*&^123ywJk=-}{]>,;:~`1!2ksuU7&*";

module.exports = function (cipher_text) {
  var cipher_blob = cipher_text.split("$");
  var ct = cipher_blob[0];
  var IV = new Buffer(cipher_blob[1], 'hex');
  var hmac = cipher_blob[2];
  var decryptor;

  chmac = crypto.createHmac('SHA256', HMAC_KEY);
  chmac.update(ct);
  chmac.update(IV.toString('hex'));

  if (!constant_time_compare(chmac.digest('hex'), hmac)) {
      throw new Error("Encrypted Blob has been tampered with...");
  }

  decryptor = crypto.createDecipheriv('AES-256-CBC', KEY, IV);
  decryptor.update(ct, 'hex', 'utf8');
  return decryptor.final('utf-8');
};

var constant_time_compare = function (val1, val2) {
  var sentinel;

  if (val1.length !== val2.length) {
      return false;
  }

  for (var i = 0; i <= (val1.length - 1); i++) {
      sentinel |= val1.charCodeAt(i) ^ val2.charCodeAt(i);
  }

  return sentinel === 0;
};
