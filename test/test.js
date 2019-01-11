var assert     = require('assert');
var functility = require('../');
var env        = process.env;

describe('requireAll', function() {
  it('should return an object with 2 properties', function(done) {
    var module = functility.requireAll(__dirname + '/examples');
    assert(2, module.length);
    done();
  });
});

describe('crypto', function() {
  it('should encrypt text', function(done) {
    var encrypt = functility.crypto.encrypt;
    var text = 'testingthisout';
    var cipher  = encrypt(text);

    assert.notEqual(text, cipher);
    done();
  });

  it('should decrypt a cipher', function(done) {
    var decrypt = functility.crypto.decrypt;
    var encrypt = functility.crypto.encrypt;

    assert(decrypt(encrypt('testringthisout')), 'testringthisout');
    done();
  });
});
