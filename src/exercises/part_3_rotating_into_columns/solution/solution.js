'use strict';

var d3 = require('d3');

module.exports = function(frequencies) {
    // CHANGE chart size variables
    var chartWidth = 960;
    var chartHeight = 500;
    var barWidth = chartWidth / frequencies.length;

    // CHANGE widthScale -> heightScale
    var heightScale = d3.scale.linear()
        .domain([0, d3.max(frequencies, function(d) { return d.value; })])
        .range([chartHeight, 0]);

    var chart = d3.select('.chart')
        .attr('width', chartWidth)
        .attr('height', chartHeight);

    // CHANGE translating on width
    var bar = chart.selectAll('g')
        .data(frequencies)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(' + (i * barWidth) + ', 0)'; });

    // CHANGE define height & y instead of width.
    bar.append('rect')
        .attr('y', function(d) { return heightScale(d.value); })
        .attr('height', function(d) { return chartHeight - heightScale(d.value); })
        .attr('width', barWidth - 1);

    bar.append('text')
        .attr('x', barWidth / 2)
        .attr('y', function(d) { return heightScale(d.value) + 3; })
        .attr('dy', '.75em')
        .text(function(d) { return d.value; });
};
