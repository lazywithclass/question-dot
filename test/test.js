var should$287 = require('should');
describe('?.', function () {
    it('calls the right statement only if the left one is truthy', function () {
        var obj$288 = {
                exist: true,
                callme: function () {
                    return 'maybe';
                }
            };
        should$287.not.exist(obj$288 && obj$288.nonExisting);
        should$287.not.exist(undefined && undefined.something);
        (obj$288 && obj$288.exist).should.be.true;
        obj$288 && obj$288.callme().should.equal('maybe');
    });
});