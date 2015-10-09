Of course hard-coding is impractical for most datasets, and the point of this tutorial is to teach you how to create charts from data automatically. So now let’s create the same structure using D3.

// TODO As on the previous exercise, select the .chart element.
// Then bind your numbers to the <div> to create the bars.
// Use the enter() selection to append a new div for each number
// Change their CSS width according to their value
// Set their text to be their value

starting with an empty page that contains only a div of class "chart". The following script selects the chart container and then appends a child div for each bar with the desired width:


----------------------------------------------------------------------

## HINTS

Here is some boilerplate:

```js
module.exports = function(numbers) {
    // TODO As on the previous exercise, select the .chart element.
    // Then bind your numbers to the <div> to create the bars.
    // Use the enter() selection to append a new div for each number
    // Change their CSS width according to their value
    // Set their text to be their value
};
```


----------------------------------------------------------------------
