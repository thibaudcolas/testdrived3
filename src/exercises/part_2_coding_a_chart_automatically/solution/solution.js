'use strict';

var d3 = require('d3');

module.exports = function(numbers) {
    var width = 420;
    var barHeight = 20;

    // d3.select('body')
    //     .append('svg')
    //     .attr('class', 'chart');

    var widthScale = d3.scale.linear()
        .domain([0, d3.max(numbers)])
        .range([0, width]);

    var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', barHeight * numbers.length);

    // console.log(document.body.outerHTML);
    // console.log(document.querySelectorAll('.chart')[0].outerHTML);
    // console.log(d3.select('.chart').size());

    var bar = chart.selectAll('g')
        .data(numbers)
    .enter().append('g')
        .attr('transform', function(d, i) { return 'translate(0,' + (i * barHeight) + ')'; });

    bar.append('rect')
        .attr('width', widthScale)
        .attr('height', barHeight - 1);

    bar.append('text')
        .attr('x', function(d) { return widthScale(d) - 3; })
        .attr('y', barHeight / 2)
        .attr('dy', '.35em')
        .text(function(d) { return d; });
};
