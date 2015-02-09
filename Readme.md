# simpler-extend

**Simple 'extend' helper for inheritance and subclassing.** Adapted from Backbone.js's [Model.extend] and CoffeeScript. This works like [simple-extend](https://www.npmjs.com/package/simple-extend), except this does not have any dependencies.

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
  ...
});
```

See Backbone.js's [Model.extend] documentation for more details.

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
