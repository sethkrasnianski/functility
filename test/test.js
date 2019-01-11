const assert     = require('assert');
const functility = require('../');
const env        = process.env;

describe('requireAll', function() {
  it('should return an object with 2 properties', function(done) {
    const module = functility.requireAll(__dirname + '/examples');
    assert(2, module.length);
    done();
  });
});

describe('crypto', function() {
  it('should encrypt text', function(done) {
    const encrypt = functility.crypto.encrypt;
    const text = 'testingthisout';
    const cipher  = encrypt(text);

    assert.notEqual(text, cipher);
    done();
  });

  it('should decrypt a cipher', function(done) {
    const decrypt = functility.crypto.decrypt;
    const encrypt = functility.crypto.encrypt;

    assert(decrypt(encrypt('testringthisout')), 'testringthisout');
    done();
  });
});
