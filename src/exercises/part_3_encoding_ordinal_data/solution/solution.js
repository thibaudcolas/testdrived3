'use strict';

var d3 = require('d3');

module.exports = function(frequencies) {
    var chartWidth = 960;
    var chartHeight = 500;

    var widthScale = d3.scale.ordinal()
        .domain(frequencies.map(function(d) { return d.letter; }))
        .rangeRoundBands([0, chartWidth], .1);

    // The range now goes from the height of the chart to 0, since SVG coordinates start at the top.
    var heightScale = d3.scale.linear()
        .domain([0, d3.max(frequencies, function(d) { return d.value; })])
        .range([chartHeight, 0]);

    var chart = d3.select('.chart')
        .attr('width', chartWidth)
        .attr('height', chartHeight);

    // We use the barWidth to move each bar to its position.
    var bar = chart.selectAll('g')
        .data(frequencies)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(' + widthScale(d.letter) + ', 0)'; });

    bar.append('rect')
        .attr('y', function(d) { return heightScale(d.value); })
        .attr('height', function(d) { return chartHeight - heightScale(d.value); })
        .attr('width', widthScale.rangeBand());

    bar.append('text')
        .attr('x', widthScale.rangeBand() / 2)
        .attr('y', function(d) { return heightScale(d.value) + 3; })
        .attr('dy', '.75em')
        .text(function(d) { return d.value; });
};
