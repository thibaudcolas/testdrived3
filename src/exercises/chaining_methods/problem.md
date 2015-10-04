Another convenience of selections is method chaining: selection methods, such as `selection.attr`, return the current selection. This lets you easily apply multiple operations to the same elements. For example, here we set the class and background-color of the body tag:

```js
d3.select('body')
    .attr('class', 'app')
    .style('background-color', 'lightgrey');
```

There is a gotcha with method chaining, however: while most operations return the same selection, some methods return a new one! For example, `selection.append` returns a new selection containing the new elements. This conveniently allows you to chain operations into the new elements.

```js
d3.selectAll('section')
    .attr('class', 'special')
.append('div')
    .html('Hello, world!');
```

Your turn now: select the `body`, change its `background-color` to "`yellow`", then append an `h1`, set its class to `chart-title` and its HTML to "`D3 bar chart`". All of it in a single method chain, please!

----------------------------------------------------------------------

## HINTS

Here is some boilerplate:

```js
var d3 = require('d3');

module.exports = function () {
    // TODO select the body tag, change its background-color, then append an h1, give it the right class, and set its HTML to the desired text.
};
```

You should definitely give a try to `{appname} server program.js` to see your changes in the browser.

----------------------------------------------------------------------
