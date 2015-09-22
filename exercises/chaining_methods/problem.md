Now let's play with elements. D3, as jQuery, allows you to work with multiple elements at once in a _selection_. You can create a selection by querying elements with a _selector_: `d3.select('body')`, or `d3.select('.subtitle')`.

Here's an example of creating a `<div>` with D3:

```js
var body = d3.select('body');
var div = body.append('div');
div.html('Hello, world!');
```

Let's do something similar: in a function, create a `<h1>` tag, and use "`D3 bar chart`" as its content.

----------------------------------------------------------------------

## HINTS

Here is some boilerplate:

```js
var d3 = require('d3');

module.exports = function () {
    // TODO select the body tag, then append an h1 and set its HTML to the desired text.
};
```

`d3.max(array)` is one of D3's helper methods to work with data. You might want to create a bookmark for D3's API documentation: https://github.com/mbostock/d3/wiki/API-Reference.

When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked `[COMPLETED]` if you are successful.

----------------------------------------------------------------------
