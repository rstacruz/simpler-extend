/*
 * Backbone-like extend, based on CoffeeScript
 *
 *     function Base() { ... };
 *     Base.extend = require('simpler-extend');
 *
 * Subclassing:
 *
 *     var Circle = Base.extend();
 *     Circle.prototype.getArea = function() { ... };
 *
 * Or to simplify things:
 *
 *     var Circle = Base.extend({
 *       initialize: function () { ... },
 *       ...
 *     });
 */

function extend (protoProps, staticProps) {
  var Parent = this, key;
  _extend(Sub, Parent);
  subclass(Sub, Parent);
  if (protoProps)  _extend(Sub.prototype, protoProps);
  if (staticProps) _extend(Sub, staticProps);

  function Sub() {
    Parent.constructor.apply(this, arguments);
    if (this.initialize) this.initialize.apply(this, arguments);
  }

  return Sub;
}

function subclass (child, parent) {
  function ctor () { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;
  return child;
}

function _extend (base, sub) {
  for (var key in sub) {
    if ({}.hasOwnProperty.call(sub, key))
      base[key] = sub[key];
  }
}

module.exports = extend;
