In the previous parts of this tutorial we made a basic bar chart in HTML and then in SVG; now, we’ll improve the display by rotating the chart into columns and adding axes. We’ll also switch to a real dataset, showing the relative frequency of letters in the English language.

Here is our new dataset, with the frequency of each letter in percent, as a bar chart:

```
                                      █
                                      █
█                                     █
█                                     █
█                           █         █
█               █           █         █
█               █         █ █         █
█             █ █         █ █       █ █
█             █ █         █ █     █ █ █
█             █ █         █ █     █ █ █
█             █ █         █ █     █ █ █
█             █ █         █ █     █ █ █
█     █       █ █     █   █ █     █ █ █
█     █       █ █     █   █ █     █ █ █
█     █       █ █     █   █ █     █ █ █
█   █ █ █     █ █     █   █ █     █ █ █ █
█   █ █ █     █ █     █ █ █ █     █ █ █ █   █
█   █ █ █ █ █ █ █     █ █ █ █ █   █ █ █ █   █   █
█   █ █ █ █ █ █ █     █ █ █ █ █   █ █ █ █   █   █
█ █ █ █ █ █ █ █ █     █ █ █ █ █   █ █ █ █   █   █
█ █ █ █ █ █ █ █ █   █ █ █ █ █ █   █ █ █ █ █ █   █
█ █ █ █ █ █ █ █ █   █ █ █ █ █ █   █ █ █ █ █ █   █
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
```

Rotating a bar chart into a column chart largely involves swapping x with y. However, a number of smaller incidental changes are also required. This is the cost of working directly with SVG rather than using a higher-level visualization tool. On the other hand, SVG offers greater customizability; and SVG is a web standard, so we can use the browser’s developer tools like the element inspector, and use SVG for things beyond visualization.

When renaming the x scale to the y scale, the range becomes `[chartHeight, 0]` rather than `[0, chartWidth]`. This is because the origin of SVG’s coordinate system is in the top-left corner. We want the zero-value to be positioned at the bottom of the chart, rather than the top. Likewise this means that we need to position the bar rects by setting the `"y"` and `"height"` attributes, whereas before we only needed to set `"width"`. (The default value of the "x" attribute is zero, and the old bars were left-aligned.)

We previously multiplied `barHeight` by the index of each data point to produce fixed-height bars. Here, the opposite behavior is desired: the chart width is fixed and the bar width variable. Rather than fix the `barHeight`, now we compute the `barWidth` by dividing the available chart width by the size of the dataset, `frequencies.length`.

Lastly, the bar labels must be positioned differently for columns rather than bars, centered just below the top of the column. The new `"dy"` attribute value of `".75em"` anchors the label at approximately the text’s cap height rather than the baseline.

----------------------------------------------------------------------

## HINTS

Here's some boilerplate:

```js
'use strict';

var d3 = require('d3');

module.exports = function(frequencies) {
    var chartWidth = 960;
    var chartHeight = 500;
    // TODO Compute barWidth based on the desired total width and number of items in the data.
    var barWidth = 20;

    // The range now goes from the height of the chart to 0, since SVG coordinates start at the top.
    var heightScale = d3.scale.linear()
        .domain([0, d3.max(frequencies, function(d) { return d.value; })])
        .range([chartHeight, 0]);

    var chart = d3.select('.chart')
        .attr('width', chartWidth)
        .attr('height', chartHeight);

    // We use the barWidth to move each bar to its position.
    var bar = chart.selectAll('g')
        .data(frequencies)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(' + (i * barWidth) + ', 0)'; });

    bar.append('rect')
        .attr('y', function(d) { /* TODO Set the y position with the scale. */ })
        .attr('height', function(d) { /* TODO The bar should go from its y position (determined with the scale) to the bottom. Beware that the SVG coordinate system starts from the top, not bottom. */ })
        .attr('width', barWidth - 1);

    bar.append('text')
        .attr('x', barWidth / 2)
        .attr('y', function(d) { return heightScale(d.value) + 3; })
        .attr('dy', '.75em')
        .text(function(d) {/* TODO The text value should be `d.value`, not just `d`. */);
};

```

----------------------------------------------------------------------
