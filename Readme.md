# simpler-extend

**Simple 'extend' helper for inheritance and subclassing.** Adapted from Backbone.js's [Model.extend] and CoffeeScript. This works like [simple-extend](https://www.npmjs.com/package/simple-extend), except this does not have any dependencies.

[![Status](http://img.shields.io/travis/rstacruz/simpler-extend/master.svg?style=flat)](https://travis-ci.org/rstacruz/simpler-extend "See test builds")

<br>

## Usage

Assign it to your base class's `.extend`:

```js
function Shape() { ... }
Shape.extend = require('simpler-extend');
```

Then use it to subclass:

```js
var Circle = Shape.extend({
  getArea: function () {
    return this.width * this.height;
  }
});
```

You can also add a constructor as `constructor`:

```js
var Circle = Shape.extend({
  constructor: function () { ... }
});
```

Calling methods from the base class:

```js
var Circle = Shape.extend({
  getArea: function () {
    var super = Shape.prototype.getArea.apply(this, arguments);
    return super * Math.PI;
  }
});
```


See Backbone.js's [Model.extend] documentation for more details.

<br>

## Creating base classes

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

Alternatively, you can also use `extend()` on its own:

```js
var extend = require('simpler-extend');

var Shape = extend({
  constructor: function(width, height) {
    this.width = width;
    this.height = height;
  },

  getArea: function() {
    return this.width * this.height;
  }
});
```

<br>

## Thanks

**simpler-extend** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/simpler-extend/contributors
[Model.extend]: http://backbonejs.org/#Model-extend
