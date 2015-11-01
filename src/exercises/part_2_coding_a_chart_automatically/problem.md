Now let's put it all together and build our first dynamic D3 SVG chart!

We'll need to:

- [X] Create a scale `widthScale`, as before, to draw our chart in a given amount of space.
- [X] Set our chart's `width` and `height` to define what space it should take.
- [X] Create the bars, and position them inside that space.
- [ ] Dimension the bars according to our `widthScale`.
- [ ] Position the text within the bars according to the `widthScale` and the `barHeight`.
- [ ] Set the text to be the number that is being charted for each bar.

The first three items on the list are very similar to what we did before, and taken care of for you. You'll just need to take care of the last three.

----------------------------------------------------------------------

## HINTS

Here is some boilerplate to get you started:

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
    // This is the same as what we did in HTML, except we don't need to mention that the value is in "px".
    bar.append('rect')
        .attr('width', function(d) { /* TODO Set the width with the scale. */ })
        .attr('height', barHeight - 1);

    // TODO Position the text on the right, vertically centered.
    // TODO Set the text according to the number, as in the HTML exercises.
    bar.append('text')
        .attr('x', function(d) { /* TODO set the x coord with widthScale, -3 for padding. */ })
        .attr('y', barHeight / 2)
        .attr('dy', '.35em')
        .text(function(d) { /* Should be equal to the bound number, d. */ });
};
```

----------------------------------------------------------------------
