var should = require('should');

describe('?.', function(){
  
  it('calls the right statement only if the left one is truthy', function() {
    var obj = {
      exist: true,
      callme: function() {
        return 'maybe';
      }
    };

    should.not.exist(obj?.nonExisting);
    should.not.exist(undefined?.something);
    (obj?.exist).should.be.true;
    obj?.callme().should.equal('maybe');
  });

});
