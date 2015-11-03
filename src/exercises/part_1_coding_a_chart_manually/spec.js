import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const numbers = [4, 8, 15, 16, 23, 42];
const submission = global.submission;

describe('Part 1: Coding a chart, manually', () => {
    beforeEach('', () => {
        d3.selectAll('.html-chart > div').remove();
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should have six <div> bars inside the container .html-chart <div>', () => {
        submission(numbers);
        expect(d3.selectAll('.html-chart > div').size()).to.be.above(0);
        expect(d3.selectAll('.html-chart > div').size()).to.equal(6);
    });

    it('each bar should have a width value 10x greater than its label, in pixels', () => {
        submission(numbers);
        const bars = d3.selectAll('.html-chart > div')[0];

        bars.forEach((elt) => {
            const value = parseInt(elt.innerHTML, 10);
            const width = parseInt(elt.style.width.split('px')[0], 10);

            expect(width).to.equal(value * 10);
        });
    });

    it('each bar should represent one item in our array of numbers', () => {
        submission(numbers);
        const bars = d3.selectAll('.html-chart > div')[0];

        bars.forEach((elt) => {
            const value = parseInt(elt.innerHTML, 10);

            expect(numbers.indexOf(value)).to.not.equal(-1);
        });
    });

    it('bars should be in the same order as in our array of numbers', () => {
        submission(numbers);
        const bars = d3.selectAll('.html-chart > div')[0];

        bars.forEach((elt, i) => {
            const value = parseInt(elt.innerHTML, 10);

            expect(numbers[i]).to.equal(value);
        });
    });
});
