First things first! We want to make sure that you're all set, let's start small.
Write a function that takes an array of numbers as parameter and returns the maximum value.

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

You can use `d3.max(numbers)` to get the maximum value in the array. Don't forget to export your function with `module.exports`.

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
