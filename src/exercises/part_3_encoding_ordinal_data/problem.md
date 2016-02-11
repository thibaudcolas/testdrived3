Unlike _quantitative_ values that can be compared numerically, subtracted or divided, ordinal values are compared by rank. Letters are ordinal; in the alphabet, A occurs before B, and B before C.

In its most explicit form, an ordinal scale is a mapping from a discrete set of data values (such as names) to a corresponding discrete set of display values (such as pixel positions). Like quantitative scales these sets are called the _domain_ and _range_, respectively.

```js
var x = d3.scale.ordinal()
    .domain(['A', 'B', 'C', 'D', 'E', 'F'])
    .range([0, 1, 2, 3, 4, 5]);
```

It would be tedious to enumerate the positions of each bar by hand, so instead we can convert a continuous range into a discrete set of values using `rangeBands`. The `rangeBands` method computes range values so as to divide the chart area into evenly-spaced, evenly-sized bands, as in a bar chart.

We are going to use `rangeRoundBands` which snaps to exact pixel boundaries for crisp edges. Rather than hard-code the letters in our domain, we can compute them from data using `Array#map`.

----------------------------------------------------------------------

## HINTS

Here is boilerplate code:

```js
'use strict';

var d3 = require('d3');

module.exports = function(frequencies) {
    var width = 960;
    var height = 500;

    // We've replaced the barWidth with a scale to do less math ourselves.
    var x = d3.scale.ordinal()
        .domain(frequencies.map(/* TODO Base the domain on the letters available as `d.letter`. */))
        .rangeRoundBands([0, width], 0.1);

    var y = d3.scale.linear()
        .domain([0, d3.max(frequencies, function(d) { return d.value; })])
        .range([height, 0]);

    var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);

    // The rendering code now uses the x and it's rangeBand to place elements.
    var bar = chart.selectAll('g')
        .data(frequencies)
    .enter().append('g')
        // TODO Use the `x` on the letter to determine the X position.
        .attr('transform', function(d, i) { return 'translate(' + 'TODO' + ', 0)'; });

    bar.append('rect')
        .attr('y', function(d) { return y(d.value); })
        .attr('height', function(d) { return height - y(d.value); })
        .attr('width', /* Use `x.rangeBand()` so that all bars have the same, automatically-calculated width and paddings */);

    bar.append('text')
        .attr('x', x.rangeBand() / 2)
        .attr('y', function(d) { return y(d.value) + 3; })
        .attr('dy', '.75em')
        .text(function(d) { return d.value; });
};
```

----------------------------------------------------------------------
