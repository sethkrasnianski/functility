var assert     = require('assert');
var functility = require('../');
var env        = process.env;

var cipher = '4e7a3c6c2e833daea4a3fd3ccd0ab361$3ac83e71b8ae8d9929e6b2ab873112e0$a5d2171e8bb0dde029dfabf3ed5109bd7be7e1d11c693d094f4faac19d3a491f';

describe('requireAll', function() {
  it('should return an object with 2 properties', function(done) {
    var module = functility.requireAll(__dirname + '/examples');
    assert(2, module.length);
    done();
  });
});

describe('crypt', function() {
  it('should encrypt text', function(done) {
    var encrypt = functility.crypt.encrypt;
    var text = 'testingthisout';
    var cipher  = encrypt(text);

    assert(cipher, cipher);
    done();
  });

  it('should decrypt a cipher', function(done) {
    var decrypt = functility.crypt.decrypt;
    var text    = decrypt(cipher);

    assert('testringthisout', text);
    done();
  });
});
