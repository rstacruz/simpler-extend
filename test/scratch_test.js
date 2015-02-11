require('./setup');

describe('creating classes from scratch', function () {
  it('works', function () {
    var Klass = extend({
      message: function () { return "hello"; }
    });

    expect((new Klass()).message()).eql('hello');
  });
});
