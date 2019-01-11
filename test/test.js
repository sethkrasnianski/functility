const assert = require('assert');
const { crypto, requireAll } = require('../');
const { encrypt, decrypt } = crypto;

describe('requireAll', function() {
  it('should return an object with 2 properties', function(done) {
    const modules = requireAll('./fixtures');
    const { module1, module2 } = modules;
    assert.strictEqual(Object.keys(modules).length, 2);
    assert.strictEqual(module1.someFunc(), 'Dogs');
    assert.strictEqual(module1.anotherFunc(), 627);
    assert.strictEqual(module2.functionIsm(), 'Cats');
    assert(module2.methodIsm());
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
