var crypto = require('crypto');
var KEY = process.env.CRYPTO_KEY || 'qwertyuiop1234567890_+-=?><MNBhj';
var HMAC_KEY = process.env.CRYPTO_HMAC_KEY || 'AS*&^123ywJk=-}{]>,;:~`1!2ksuU7&*';

module.exports = function(cipherText) {
  var cipherBlob = cipherText.split('$');
  var ct = cipherBlob[0];
  var IV = new Buffer(cipherBlob[1], 'hex');
  var hmac = cipherBlob[2];
  var decryptor;

  chmac = crypto.createHmac('SHA256', HMAC_KEY);
  chmac.update(ct);
  chmac.update(IV.toString('hex'));

  if (!constantTimeCompare(chmac.digest('hex'), hmac)) {
    throw new Error('Encrypted Blob has been tampered with...');
  }

  decryptor = crypto.createDecipheriv('AES-256-CBC', KEY, IV);
  decryptor.update(ct, 'hex', 'utf8');
  return decryptor.final('utf-8');
};

var constantTimeCompare = function(val1, val2) {
  var sentinel;

  if (val1.length !== val2.length) {
    return false;
  }

  for (var i = 0; i <= (val1.length - 1); i++) {
    sentinel |= val1.charCodeAt(i) ^ val2.charCodeAt(i);
  }

  return sentinel === 0;
};
