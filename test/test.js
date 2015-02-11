var assert     = require("assert")
  , functility = require('../');

describe('require_all', function() {
  it('should return an object with 2 properties', function(done) {
    var module = functility.require_all(__dirname + "/javascript");
    assert(2, module.length);
    done();
  });
});
