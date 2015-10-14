Of course hard-coding is impractical for most datasets, and the point of this tutorial is to teach you how to create charts from data automatically. So now let’s create the identical structure using D3.

We start with an empty page that contains only a div of class "`chart`". First, we select the container using a class selector:

```js
d3.select('.chart')
```

Then, inside that `.chart` we want to have a `<div>` for each entry in our dataset. We are going to do a __data join__ between the `<div>` and our array of numbers:

```js
d3.select('.chart')
    .selectAll('div')
    .data(numbers)
```

> The data join is one of D3's key concepts. Have a look at http://bost.ocks.org/mike/join/.

Since we know the `selectAll('div')` selection is empty, the returned `update` and `exit()` selections are also empty, and we need only handle the `enter()` selection which represents new data for which there was no existing element. We create these missing elements by appending to the enter selection:

```js
d3.select('.chart')
    .selectAll('div')
    .data(numbers)
.enter().append('div')
```

Now we have a new `<div>` for each item in `numbers`. You just need to set their width and text dynamically, according to their value:

```js
d3.select('.chart')
    .selectAll('div')
    .data(numbers)
.enter().append('div')
    .style('width', function(d) { /* TODO Return 10x the value, in pixels. */ })
    .text(function(d) { /* TODO Return the value. */ });
```

Calling the parameter `d` is a D3 convention for single data points.

----------------------------------------------------------------------

## HINTS

Fill in the gaps:

```js
module.exports = function(numbers) {
    d3.select('.chart')
        .selectAll('div')
        .data(numbers)
    .enter().append('div')
        .style('width', function(d) { /* TODO Return 10x the value, in pixels. */ })
        .text(function(d) { /* TODO Return the value. */ });
};
```

----------------------------------------------------------------------
