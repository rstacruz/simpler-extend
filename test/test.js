var expect = require('chai').expect;
var extend = require('../index');

var BBB, CCC;

describe('basic case', function () {
  function AAA() {};
  AAA.prototype.getArea = function () { return 3; };
  AAA.extend = extend;

  it('works', function () {
    BBB = AAA.extend();
    expect((new BBB()).getArea()).eql(3);
  });

  it('works with a prototype', function () {
    BBB = AAA.extend({
      getArea: function () { return 9; }
    });

    expect((new BBB()).getArea()).eql(9);
  });

  it('can accept static properties', function () {
    BBB = AAA.extend(null, {
      getInstance: function () { return "this"; }
    });

    expect(BBB.getInstance()).eql("this");
  });

  it('works in 2 levels', function () {
    BBB = AAA.extend({
      getArea: function () { return 9; }
    });

    CCC = BBB.extend({
      getArea: function () { return 27; }
    });

    expect((new CCC()).getArea()).eql(27);
  });

  it('works with a "initialize" method', function () {
    var called = 0;

    BBB = AAA.extend({
      initialize: function () {
        called++;
      }
    });

    new BBB();
    expect(called).eql(1);
  });

  it('works with a "initialize" method in 2 levels', function () {
    var called = { b: 0, c: 0 };

    BBB = AAA.extend({
      initialize: function () { called.b++; }
    });

    CCC = BBB.extend({
      initialize: function () { called.c++; }
    });

    new CCC();
    expect(called.b).eql(1);
    expect(called.c).eql(1);
  });
});
