'use strict';

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
