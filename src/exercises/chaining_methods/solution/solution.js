'use strict';

var d3 = require('d3');

module.exports = function() {
    d3.select('body')
        .style('background-color', 'yellow')
    .append('h1')
        .attr('class', 'chart-title')
        .html('D3 bar chart');
};
