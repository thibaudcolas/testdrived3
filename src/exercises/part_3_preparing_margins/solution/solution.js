'use strict';

var d3 = require('d3');

module.exports = function(frequencies) {
    var margin = { top: 20, right: 30, bottom: 30, left: 40 };
    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    // We've replaced the barWidth with a scale to do less math ourselves.
    var x = d3.scale.ordinal()
        .domain(frequencies.map(function(d) { return d.letter; }))
        .rangeRoundBands([0, width], 0.1);

    var y = d3.scale.linear()
        .domain([0, d3.max(frequencies, function(d) { return d.value; })])
        .range([height, 0]);

    var chart = d3.select('.chart')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

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
