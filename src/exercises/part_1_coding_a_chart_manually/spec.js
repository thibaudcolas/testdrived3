import { describe, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const numbers = [4, 8, 15, 16, 23, 42];
const submission = global.submission;

describe('Part 1: Coding a chart, manually', () => {
    beforeEach('reset the page', () => {
        d3.select('body').html('');
    });

    it('should export a function', () => {
        expect(submission).to.exist;
        expect(submission).to.be.a('function');
    });

    it('should render a single container <div> with the class "chart"', () => {
        submission(numbers);
        expect(d3.selectAll('body > div')).to.exist;
        expect(d3.selectAll('.chart')).to.exist;
        expect(d3.selectAll('.chart').size()).to.equal(1);
    });

    it('should have six <div> bars inside the container <div>', () => {
        submission(numbers);
        expect(d3.selectAll('.chart > div')).to.exist;
        expect(d3.selectAll('.chart > div').size()).to.equal(6);
    });

    it('each bar should have a width value 10x greater than its label', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > div')[0];

        bars.forEach((elt) => {
            const value = parseInt(elt.innerHTML, 10);
            const width = parseInt(elt.style.width.split('px')[0], 10);

            expect(width).to.equal(value * 10);
        });
    });

    it('each bar should represent one item in our array of numbers', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > div')[0];

        bars.forEach((elt) => {
            const value = parseInt(elt.innerHTML, 10);

            expect(numbers.indexOf(value)).to.not.equal(-1);
        });
    });
});
