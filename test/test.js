var expect = require('chai').expect;
var extend = require('../index');

var Circle, Ellipse;

describe('basic case', function () {
  function Shape() {};
  Shape.prototype.getArea = function () { return 3; };
  Shape.extend = extend;

  it('works', function () {
    Circle = Shape.extend();
    expect((new Circle()).getArea()).eql(3);
  });

  it('works with a prototype', function () {
    Circle = Shape.extend({
      getArea: function () { return 9; }
    });

    expect((new Circle()).getArea()).eql(9);
  });

  it('can accept static properties', function () {
    Circle = Shape.extend(null, {
      getInstance: function () { return "this"; }
    });

    expect(Circle.getInstance()).eql("this");
  });

  it('works in 2 levels', function () {
    Circle = Shape.extend({
      getArea: function () { return 9; }
    });

    Ellipse = Circle.extend({
      getArea: function () { return 27; }
    });

    expect((new Ellipse()).getArea()).eql(27);
  });

  it('works with a "initialize" method', function () {
    var called = 0;

    Circle = Shape.extend({
      initialize: function () {
        called++;
      }
    });

    new Circle();
    expect(called).eql(1);
  });
});
