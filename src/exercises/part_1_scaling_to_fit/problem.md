Now let's say that instead of having the chart width being 10X its largest number, we want the chart to fit onto a mobile phone screen. No matter what numbers it is displaying. This is what D3's linear scales are for (https://github.com/mbostock/d3/wiki/Quantitative-Scales).

D3’s scales specify a mapping from __data space (domain)__ to __display space (range)__. The scale is taking care of mapping items in the data space (here, our numbers) to items in the display space (here, widths in pixels).

```js
var x = d3.scale.linear()
    .domain([0, d3.max(numbers)])
    .range([0, 300]);
```

We want numbers ranging from 0 to the maximum number to map to widths ranging from 0 to 300px. Although `x` here looks like an object, it is also a function that returns the scaled display value in the range for a given data value in the domain.

```js
// 300
x(42)
// 0
x(0)
// 150
x(21)
```

Use the `x` to set the width of our bars, instead of using a hard-coded multiplication.

----------------------------------------------------------------------

## HINTS

Here's some boilerplate:

```js
module.exports = function(numbers) {
    var x = d3.scale.linear()
        .domain([0, d3.max(numbers)])
        .range([0, 300]);

    d3.select('.html-chart')
        .selectAll('div')
        .data(numbers)
    .enter().append('div')
        .style('width', function(d) { /* TODO Return the width from the scale, in pixels. */ })
        .text(function(d) { return d; });
};
```

----------------------------------------------------------------------
