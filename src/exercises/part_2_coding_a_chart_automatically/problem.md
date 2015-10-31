

----------------------------------------------------------------------

## HINTS

Here is some boilerplate:

```js
var d3 = require('d3');

module.exports = function(numbers) {
    var chartWidth = 420;
    var barHeight = 20;

    var widthScale = d3.scale.linear()
        .domain([0, d3.max(numbers)])
        .range([0, chartWidth]);

    // Now this is an <svg> element instead of a <div>.
    var chart = d3.select('.chart')
        .attr('width', chartWidth)
        .attr('height', barHeight * numbers.length);

    // Bind, then create a <g> tag for each number and position it.
    // Y Position is done with a translation on the Y axis.
    var bar = chart.selectAll('g')
        .data(numbers)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(0,' + (i * barHeight) + ')'; });

    // TODO The width of each <rect> is determined by the widthScale.
    // This is the same as what we did in HTML.
    // TODO The height is the same for all bars.
    bar.append('rect')
        .attr('width', /* TODO set the width with widthScale */)
        .attr('height', barHeight - 1);

    // TODO Position the text on the right, vertically centered.
    // TODO Set the text according to the number, as in the HTML exercises.
    bar.append('text')
        .attr('x', /* TODO set the x coord with widthScale, -3 for padding */)
        .attr('y', /* TODO set the y coord to be half barHeight */)
        .attr('dy', '.35em')
        .text(/* TODO Should be equal to the bound number, d */);
};
```

----------------------------------------------------------------------
