import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

import { frequencies } from '../../lib/data';

const submission = global.submission;

const margin = { top: 20, right: 30, bottom: 30, left: 40 };

const y = d3.scale.linear()
    .domain([0, d3.max(frequencies, d => d.value)])
    .range([500 - margin.top - margin.bottom, 0]);

const x = d3.scale.ordinal()
    .domain(frequencies.map(d => d.letter))
    .rangeRoundBands([0, 960 - margin.left - margin.right], 0.1);

describe('Part 3: Preparing margins', () => {
    beforeEach('', () => {
        d3.select('.chart').remove();
        d3.select('body').append('svg').attr('class', 'chart');
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should have a container <svg> with a "chart" class inside the body', () => {
        submission(frequencies);
        expect(d3.select('body > svg.chart').size()).to.be.above(0);
    });

    it('should dimensions the container properly', () => {
        submission(frequencies);
        expect(parseInt(d3.select('.chart').attr('width'), 10)).to.equal(960);
        expect(parseInt(d3.select('.chart').attr('height'), 10)).to.equal(500);
    });

    it.skip('should have 26 <g> bars inside the container .chart', () => {
        submission(frequencies);
        expect(d3.selectAll('.chart > g > g')).to.equal(26);
    });

    it('each bar should contain a <rect> and a <text>', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g > g')[0];

        bars.forEach((elt) => {
            expect(d3.select(elt).select('rect').size()).to.be.above(0);
            expect(d3.select(elt).select('text').size()).to.be.above(0);
        });
    });

    it('each bar should have a width that is not fixed', () => {
        submission(frequencies);
        const rects = d3.selectAll('rect')[0];

        rects.forEach((elt) => {
            const width = parseInt(elt.getAttribute('width'), 10);

            expect(width).to.not.equal(19);
        });
    });

    it('each bar should be positioned with a translate transform, according an ordinal scale', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const transform = bar.attr('transform');
            const positionX = parseFloat(transform.split('translate(')[1].split(',0)')[0]);

            expect(transform).to.be.a('string');
            expect(transform).to.contain('translate');
            expect(positionX).to.be.closeTo(x(d.letter), 1 + 0.05);
        });
    });

    it('each <text> should have the right value, according to its bound data', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const value = parseFloat(bar.text());

            expect(value).to.be.a('number');
            expect(value).to.equal(d.value);
        });
    });

    it('each <text> should be at the right position according to the scale\'s range band', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const text = bar.select('text');
            const xPos = parseFloat(text.attr('x'));
            const yPos = parseFloat(text.attr('y'));

            expect(xPos).to.be.closeTo(x.rangeBand() / 2, 1);
            expect(yPos).to.be.closeTo(y(d.value), 3);
        });
    });

    it('each <rect> should be of the right dimensions according to its bound data and the scale', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const rect = bar.select('rect');
            const width = parseFloat(rect.attr('width'));
            const height = parseFloat(rect.attr('height'));

            expect(width).to.be.closeTo(x.rangeBand(), 1);
            expect(height).to.be.closeTo(500 - y(d.value), 5);
        });
    });
});
