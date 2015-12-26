import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

import { frequencies } from '../../lib/data';

const submission = global.submission;

const heightScale = d3.scale.linear()
    .domain([0, d3.max(frequencies, d => d.value)])
    .range([500, 0]);

describe('Part 3: Rotating into columns', () => {
    beforeEach('', () => {
        d3.select('.chart').remove();
        d3.select('body').append('svg').attr('class', 'chart');
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should have a container <svg> with a "chart" class inside the body', () => {
        submission(frequencies);
        expect(d3.select('body > svg').size()).to.be.above(0);
        expect(d3.select('body > svg.chart').size()).to.be.above(0);
    });

    it('should dimensions the container properly', () => {
        submission(frequencies);
        expect(parseInt(d3.select('.chart').attr('width'), 10)).to.equal(960);
        expect(parseInt(d3.select('.chart').attr('height'), 10)).to.equal(500);
    });

    it('should have 26 <g> bars inside the container .chart', () => {
        submission(frequencies);
        expect(d3.selectAll('.chart > g').size()).to.be.above(0);
        expect(d3.selectAll('.chart > g').size()).to.equal(26);
    });

    it('each bar should contain a <rect> and a <text>', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt) => {
            expect(d3.select(elt).select('rect').size()).to.be.above(0);
            expect(d3.select(elt).select('text').size()).to.be.above(0);
        });
    });

    it('each bar should be positioned with a translate transform, according to its order', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt, i) => {
            const transform = elt.getAttribute('transform');
            const positionX = parseFloat(transform.split('translate(')[1].split(',0)')[0]);

            expect(transform).to.be.a('string');
            expect(transform.indexOf('translate(')).to.equal(0);
            expect(positionX).to.be.closeTo(i * 960 / 26, 0.05);
        });
    });

    it('each <text> should have the right value, according to its bound data', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const text = parseFloat(bar.text());

            expect(text).to.be.a('number');
            expect(text).to.be.above(0);
            expect(frequencies.some(freq => freq.value === text)).to.equal(true);
            expect(text).to.equal(d.value);
        });
    });

    it('each <text> should be at the right position according to its bound data', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const text = bar.select('text');
            const x = parseFloat(text.attr('x'));
            const y = parseFloat(text.attr('y'));

            expect(x).to.equal((960 / 26) / 2);
            expect(y).to.equal(heightScale(d.value) + 3);
        });
    });

    it('each <rect> should be of the right dimensions according to its bound data', () => {
        submission(frequencies);
        const bars = d3.selectAll('.chart > g');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const rect = bar.select('rect');
            const width = parseFloat(rect.attr('width'));
            const height = parseFloat(rect.attr('height'));

            expect(width).to.equal(960 / 26 - 1);
            expect(height).to.equal(500 - heightScale(d.value));
        });
    });
});
