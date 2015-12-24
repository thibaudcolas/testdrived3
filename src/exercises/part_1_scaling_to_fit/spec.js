import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

import { numbers } from '../../lib/data';

const submission = global.submission;

describe('Part 1: Scaling to fit', () => {
    beforeEach('', () => {
        d3.selectAll('.html-chart > div').remove();
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should have six <div> bars inside the container', () => {
        submission(numbers);
        expect(d3.selectAll('.html-chart > div').size()).to.equal(6);
    });

    it('each bar should represent one item in our array of numbers', () => {
        submission(numbers);

        d3.selectAll('.html-chart > div').each((d) => {
            expect(numbers.indexOf(d)).not.to.equal(-1);
        });
    });

    it('each bar should have a width in pixels', () => {
        submission(numbers);

        const bars = d3.selectAll('.html-chart > div');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const width = parseFloat(bar.style('width').split('px')[0]);

            expect(width).to.be.above(0);
        });
    });

    it('each bar\'s width should follow a linear scale from 0 to 300', () => {
        submission(numbers);

        const bars = d3.selectAll('.html-chart > div');

        const x = d3.scale.linear()
            .domain([0, d3.max(numbers)])
            .range([0, 300]);

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const width = parseFloat(bar.style('width').split('px')[0]);

            expect(width).to.equal(x(d));
        });
    });

    it('each bar should have a label identical to its bound data', () => {
        submission(numbers);

        const bars = d3.selectAll('.html-chart > div');

        bars.each((d, i) => {
            const bar = d3.select(bars[0][i]);
            const label = parseInt(bar.text(), 10);

            expect(label).to.equal(d);
        });
    });

    it('bars should be in the same order as in our array of numbers', () => {
        submission(numbers);

        d3.selectAll('.html-chart > div').each((d, i) => {
            expect(numbers.indexOf(d)).to.equal(i);
        });
    });
});
