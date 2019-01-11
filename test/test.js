const assert = require('assert');
const { crypto, requireAll } = require('../');
const { encrypt, decrypt } = crypto;

describe('requireAll', function() {
  it('should return an object with 2 properties', function(done) {
    const module = requireAll('./examples');
    assert(2, module.length);
    done();
  });
});

describe('crypto', function() {
  it('should encrypt text', function(done) {
    const text = 'testingthisout';
    const cipher = encrypt(text);

    assert.notEqual(text, cipher);
    done();
  });

  it('should decrypt a cipher', function(done) {
    assert(decrypt(encrypt('testringthisout')), 'testringthisout');
    done();
  });
});
