In the previous parts of this tutorial we made a basic bar chart in HTML and then in SVG; now, we’ll improve the display by rotating the chart into columns and adding axes. We’ll also switch to a real dataset, showing the relative frequency of letters in the English language.

Here is our new dataset, with the frequency of each letter in percent:

```
  A   B   C   D   E   F   G   H   I   J   K   L   M  
 8.1 1.4 2.7 4.2 2.7 2.2 2.0 6.0 6.9 0.1 0.7 4.0 2.4 

  N   O   P   Q   R   S   T   U   V   W   X   Y   Z  
 6.7 7.5 1.9 0.0 5.9 6.3 9.0 2.7 0.9 2.3 0.1 1.9 0.0 
```

Rotating a bar chart into a column chart largely involves swapping x with y. However, a number of smaller incidental changes are also required. This is the cost of working directly with SVG rather than using a higher-level visualization tool. On the other hand, SVG offers greater customizability; and SVG is a web standard, so we can use the browser’s developer tools like the element inspector, and use SVG for things beyond visualization.

When renaming the x scale to the y scale, the range becomes [height, 0] rather than [0, width]. This is because the origin of SVG’s coordinate system is in the top-left corner. We want the zero-value to be positioned at the bottom of the chart, rather than the top. Likewise this means that we need to position the bar rects by setting the `"y"` and `"height"` attributes, whereas before we only needed to set `"width"`. (The default value of the "x" attribute is zero, and the old bars were left-aligned.)

We previously multiplied the var `barHeight` by the index of each data point to produce fixed-height bars. The resulting chart’s height thus depended on the size of the dataset. But here the opposite behavior is desired: the chart width is fixed and the bar width variable. So rather than fix the `barHeight`, now we compute the `barWidth` by dividing the available chart width by the size of the dataset, `frequencies.length`.

Lastly, the bar labels must be positioned differently for columns rather than bars, centered just below the top of the column. The new `"dy"` attribute value of `".75em"` anchors the label at approximately the text’s cap height rather than the baseline.

----------------------------------------------------------------------

## HINTS

Boilerplate TODO:

```js
var d3 = require('d3');

module.exports = function(frequencies) {
    // TODO
};
```

----------------------------------------------------------------------
