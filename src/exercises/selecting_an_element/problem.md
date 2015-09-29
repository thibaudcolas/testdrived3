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

When you are done, you can run:

```sh
$ {appname} server program.js
```

to check your solution in your browser. The browser window will open and execute your code.

----------------------------------------------------------------------
