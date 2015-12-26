import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

import { numbers } from '../../lib/data';

const submission = global.submission;

describe('Part 2: Coding a chart, automatically', () => {
    beforeEach('', () => {
        d3.select('.chart').remove();
        d3.select('body').append('svg').attr('class', 'chart');
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should have a container <svg> with a "chart" class inside the body', () => {
        submission(numbers);
        expect(d3.select('body > svg.chart').size()).to.be.above(0);
    });

    it('should dimensions the container properly', () => {
        submission(numbers);
        expect(parseInt(d3.select('.chart').attr('width'), 10)).to.equal(420);
        expect(parseInt(d3.select('.chart').attr('height'), 10)).to.equal(120);
    });

    it('should have six <g> bars inside the container .chart', () => {
        submission(numbers);
        expect(d3.selectAll('.chart > g').size()).to.equal(6);
    });

    it('each bar should contain a <rect> and a <text>', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt) => {
            expect(d3.select(elt).select('rect').size()).to.be.above(0);
            expect(d3.select(elt).select('text').size()).to.be.above(0);
        });
    });

    it('each bar should be positioned with a translate transform, according to its order', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt, i) => {
            const transform = elt.getAttribute('transform');
            const positionY = parseInt(transform.split('translate(0,')[1], 10);

            expect(transform).to.be.a('string');
            expect(transform).to.contain('translate');
            expect(positionY).to.equal(i * 20);
        });
    });

    it('each <text> should have the right value, according to its bound data', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const value = parseInt(bar.text(), 10);

            expect(value).to.be.a('number');
            expect(value).to.equal(d);
        });
    });

    it('each <text> should be at the right position according to its bound data', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const text = bar.select('text');
            const x = parseFloat(text.attr('x'));
            const y = parseFloat(text.attr('y'));

            expect(x).to.be.closeTo(d * 10, 3 + 0.05);
            expect(y).to.equal(10);
        });
    });

    it('each <rect> should be of the right dimensions according to its bound data', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const rect = bar.select('rect');
            const width = parseInt(rect.attr('width'), 10);
            const height = parseInt(rect.attr('height'), 10);

            expect(width).to.be.equal(d * 10);
            expect(height).to.be.closeTo(20, 1);
        });
    });
});
