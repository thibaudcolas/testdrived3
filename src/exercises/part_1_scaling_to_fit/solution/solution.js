'use strict';

var d3 = require('d3');

module.exports = function(numbers) {
    var widthScale = d3.scale.linear()
        .domain([0, d3.max(numbers)])
        .range([0, 300]);

    d3.select('.chart')
        .selectAll('div')
        .data(numbers)
    .enter().append('div')
        .style('width', function(d) { return widthScale(d) + 'px'; })
        .text(function(d) { return d; });
};
