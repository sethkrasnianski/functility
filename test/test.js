const assert = require('assert');
const { crypto, requireAll } = require('../');
const { encrypt, decrypt } = crypto;

describe('requireAll', function() {
  it('should return an object with 2 properties', function(done) {
    const modules = requireAll('./fixtures');
    assert(2, modules.length);
    done();
  });
});

describe('crypto', function() {
  it('should encrypt text', function(done) {
    const text = 'mysupersecrettext';
    const cipher = encrypt(text);

    assert.deepEqual(Object.keys(cipher), ['iv', 'encryptedData']);
    assert.strictEqual(cipher.iv.length, 32);
    assert.strictEqual(cipher.encryptedData.length, 64);
    assert.notStrictEqual(text, cipher);
    done();
  });

  it('should decrypt a cipher', function(done) {
    assert.strictEqual(decrypt(encrypt('testringthisout')), 'testringthisout');
    done();
  });
});
