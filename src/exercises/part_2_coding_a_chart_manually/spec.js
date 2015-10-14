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

    it('should have six <g> bars inside the container .chart <g>', () => {
        submission(numbers);
        expect(d3.selectAll('.chart > g')).to.exist;
        expect(d3.selectAll('.chart > g').size()).to.equal(6);
    });
});
