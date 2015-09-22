This introductory tutorial covers how to make a bar chart using the D3 JavaScript library. First we’ll make a bare-bones version in HTML, then a more complete chart in Scalable Vector Graphics (SVG), and lastly animated transitions between views.

----------------------------------------------------------------------

First things first! We want to make sure that you're all set, let's start small.
Write a function that takes an array of numbers as parameter and returns the maximum value, using the `d3.max` function.

----------------------------------------------------------------------

## HINTS

Here is some boilerplate:

```js
'use strict';

var d3 = require('d3');

function helloWorld(numbers) {
    // TODO return the maximum.
};

module.exports = helloWorld;
```

`d3.max(array)` is one of D3's helper methods to work with data. You might want to create a bookmark for D3's API documentation: https://github.com/mbostock/d3/wiki/API-Reference.

Feel free to use ES6 JavaScript if you want to. The boilerplate would become:

```js
import d3 from 'd3';

export default function helloWorld(numbers) {
    // TODO return the maximum.
}
```

When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked `[COMPLETED]` if you are successful.

----------------------------------------------------------------------
