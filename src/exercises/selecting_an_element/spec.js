import { describe, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const numbers = [4, 8, 15, 16, 23, 42];
const submission = global.submission;

describe('Selecting an element', () => {
    beforeEach('reset the page', () => {
        d3.select('body').html('');
    });

    it('should export a function', () => {
        expect(submission).to.exist;
        expect(submission).to.be.a('function');
    });

    it('should add a <h1> tag on the page', () => {
        expect(d3.select('h1').empty()).to.be.true;
        submission(numbers);
        expect(d3.select('h1').empty()).to.be.false;
    });

    it('should set the <h1> text to "D3 bar chart"', () => {
        submission(numbers);
        expect(d3.select('h1').html()).to.equal('D3 bar chart');
    });
});
