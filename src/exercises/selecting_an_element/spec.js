import { describe, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const submission = global.submission;
const numbers = [4, 8, 15, 16, 23, 42];

describe('SELECTING AN ELEMENT', () => {
    beforeEach('reset the page', () => {
        d3.select('body').html('');
    });

    it('should export something', () => {
        expect(submission).to.exist;
    });

    it('should export a function', () => {
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
