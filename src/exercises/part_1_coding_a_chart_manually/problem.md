This is the data we are going to work with:

```js
var numbers = [4, 8, 15, 16, 23, 42];
```

And this is the HTML that we want to obtain:

```html
<div class="html-chart">
    <div style="width: 40px;">4</div>
    <div style="width: 80px;">8</div>
    <div style="width: 150px;">15</div>
    <div style="width: 160px;">16</div>
    <div style="width: 230px;">23</div>
    <div style="width: 420px;">42</div>
</div>
```

After all, there are only six numbers in this trivial data set, so it’s not hard to write a few div elements by hand, set their width as a multiple of the data, and be done with it. We style the divs so that they look like bars with a right-aligned label:

```css
.html-chart div {
    margin: 3px;
    padding: 3px;
    text-align: right;
    color: white;
    background-color: steelblue;
}
```

For now we just want to see what the result looks like so let's inject this HTML into our page and have a look. Copy the solution and use `{appname} server program.js` to see for yourself.

Note: you'll still need to run `{appname} verify program.js` for this exercise to validate.

----------------------------------------------------------------------

## HINTS

Copy and paste the solution:

```js
var d3 = require('d3');

module.exports = function() {
    d3.select('body')
        .html('                                      \
            <div class="html-chart">                 \
                <div style="width: 40px;">4</div>    \
                <div style="width: 80px;">8</div>    \
                <div style="width: 150px;">15</div>  \
                <div style="width: 160px;">16</div>  \
                <div style="width: 230px;">23</div>  \
                <div style="width: 420px;">42</div>  \
            </div>                                   \
        ');
};
```

If you want to give a try to ES6, you can use multi-line strings with (\`\`) instead of the line continuation (\\):

```js
import d3 from 'd3';

export default function() {
    d3.select('body')
        .html(`
            <div class="html-chart">
                <div style="width: 40px;">4</div>
                <div style="width: 80px;">8</div>
                <div style="width: 150px;">15</div>
                <div style="width: 160px;">16</div>
                <div style="width: 230px;">23</div>
                <div style="width: 420px;">42</div>
            </div>
        `);
}
```

----------------------------------------------------------------------
