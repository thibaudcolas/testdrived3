'use strict';

var d3 = require('d3');

module.exports = function(numbers) {
    var chartWidth = 420;
    var barHeight = 20;

    var widthScale = d3.scale.linear()
        .domain([0, d3.max(numbers)])
        .range([0, chartWidth]);

    var chart = d3.select('.chart')
        .attr('width', chartWidth)
        .attr('height', barHeight * numbers.length);

    var bar = chart.selectAll('g')
        .data(numbers)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(0,' + (i * barHeight) + ')'; });

    bar.append('rect')
        .attr('width', function(d) { return widthScale(d); })
        .attr('height', barHeight - 1);

    bar.append('text')
        .attr('x', function(d) { return widthScale(d) - 3; })
        .attr('y', barHeight / 2)
        .attr('dy', '.35em')
        .text(function(d) { return d; });
};
