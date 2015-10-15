import { describe, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const numbers = [4, 8, 15, 16, 23, 42];
const submission = global.submission;

describe('Part 2: Coding a chart, manually', () => {
    beforeEach('', () => {
        d3.selectAll('.chart > g').remove();
    });

    it('should export a function', () => {
        expect(submission).to.exist;
        expect(submission).to.be.a('function');
    });

    it('should have a container <svg> with a "chart" class inside the body', () => {
        submission(numbers);
        expect(d3.select('body > svg').size()).to.be.above(0);
        expect(d3.select('body > svg.chart').size()).to.be.above(0);
    });

    it('should dimensions the container properly', () => {
        submission(numbers);
        expect(parseInt(d3.select('.chart').attr('width'), 10)).to.equal(420);
        expect(parseInt(d3.select('.chart').attr('height'), 10)).to.equal(120);
    });

    it('should have six <g> bars inside the container .chart', () => {
        submission(numbers);
        expect(d3.selectAll('.chart > g').size()).to.be.above(0);
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

    it('each bar should be position with a translate transform', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach(() => {

        });
    });

    it('each <rect> should be of the right dimensions', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach(() => {

        });
    });

    it('each <text> should be at the right position', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach(() => {

        });
    });

    it('each <text> should have the right value', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach(() => {

        });
    });
});
