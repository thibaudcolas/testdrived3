'use strict';

var d3 = require('d3');

module.exports = function(numbers) {
    var x = d3.scale.linear()
        .domain([0, d3.max(numbers)])
        .range([0, 300]);

    d3.select('.html-chart')
        .selectAll('div')
        .data(numbers)
    .enter().append('div')
        .style('width', function(d) { return x(d) + 'px'; })
        .text(function(d) { return d; });
};
