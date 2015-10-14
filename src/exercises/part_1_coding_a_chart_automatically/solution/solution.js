'use strict';

var d3 = require('d3');

module.exports = function(numbers) {
    d3.select('.html-chart')
        .selectAll('div')
        .data(numbers)
    .enter().append('div')
        .style('width', function(d) { return (d * 10) + 'px'; })
        .text(function(d) { return d; });
};
