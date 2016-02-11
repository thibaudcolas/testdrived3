'use strict';

var d3 = require('d3');

module.exports = function(frequencies) {
    var width = 960;
    var height = 500;

    // We've replaced the barWidth with a scale to do less math ourselves.
    var x = d3.scale.ordinal()
        .domain(frequencies.map(function(d) { return d.letter; }))
        .rangeRoundBands([0, width], 0.1);

    var y = d3.scale.linear()
        .domain([0, d3.max(frequencies, function(d) { return d.value; })])
        .range([height, 0]);

    var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);

    // The rendering code now uses the x scale and it's rangeBand to place elements.
    var bar = chart.selectAll('g')
        .data(frequencies)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(' + x(d.letter) + ', 0)'; });

    bar.append('rect')
        .attr('y', function(d) { return y(d.value); })
        .attr('height', function(d) { return height - y(d.value); })
        .attr('width', x.rangeBand());

    bar.append('text')
        .attr('x', x.rangeBand() / 2)
        .attr('y', function(d) { return y(d.value) + 3; })
        .attr('dy', '.75em')
        .text(function(d) { return d.value; });
};
