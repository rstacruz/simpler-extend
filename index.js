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
 *       constructor: function () { ... },
 *       ...
 *     });
 */

function extend (protoProps, staticProps) {
  var Parent = this, key;
  var Child = (protoProps && protoProps.hasOwnProperty('constructor')) ?
    protoProps.constructor :
    typeof Parent === 'function' ?
    function () { Parent.apply(this, arguments); } :
    function () {};

  _extend(Child, Parent);
  subclass(Child, Parent);
  if (protoProps)  _extend(Child.prototype, protoProps);
  if (staticProps) _extend(Child, staticProps);

  return Child;
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
