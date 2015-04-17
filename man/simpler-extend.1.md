# simpler-extend(1) -- Simple extend helper for inheritance and subclassing

## DESCRIPTION

Simple 'extend' helper for inheritance and subclassing. Adapted from Backbone.js's Model.extend and CoffeeScript. This works like npm:simple-extend, except this does not have any dependencies.

## USAGE

### Assign .extend
Assign it to your base class's `.extend`:

```js
function Shape() { ... }
Shape.extend = require('simpler-extend');
```

### Subclassing
Then use it to subclass:

```js
var Circle = Shape.extend({
  getArea: function () {
    return this.width * this.height;
  }
});
```

### Constructors
You can also add a constructor as `constructor`:

```js
var Circle = Shape.extend({
  constructor: function () { ... }
});
```

### Methods
Calling methods from the base class:

```js
var Circle = Shape.extend({
  getArea: function () {
    var super = Shape.prototype.getArea.apply(this, arguments);
    return super * Math.PI;
  }
});
```

See Backbone.js's Model.extend documentation for more details: [backbonejs.org][Model.extend]

### Base classes

To create an extendable class, you can use any kind of JavaScript function with a prototype (a "class"):

```js
function Shape(width, height) {
  this.width = width;
  this.height = height;
}

Shape.prototype.getArea = function () {
  return this.width & this.height;
};

// Allow subclassing `Shape`
Shape.extend = require('simpler-extend');
```

<br>

## ES6 NOTES

`simpler-extend` can be used with ES6 classes. The only advantage of using this over ES6's native inheritance is that it will support legacy ES5 engines like old IE's which Babel doesn't support.

```js
/* es6 */
class Shape {
  ...
}

Shape.extend = require('simpler-extend');
```

Subclassing can use the ES6 object syntax:

```js
let Circle = Shape.extend({
  getArea() {
    var super = Shape.prototype.getArea.apply(this, arguments);
    return super * Math.PI;
  },

  getCircumference() {
    ...
  }
})
```

## ALSO SEE

* [Model.extend]
* [simple-extend]

## COPYRIGHT

**simpler-extend** (c) 2015+, Rico Sta. Cruz. Released under the [MIT License][MIT].
Authored and maintained by Rico Sta. Cruz with help from contributors.

* [ricostacruz.com](http://ricostacruz.com)
* GitHub [@rstacruz](https://github.com/rstacruz)
* Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[Model.extend]: http://backbonejs.org/#Model-extend
[simple-extend]: https://www.npmjs.com/package/simple-extend
