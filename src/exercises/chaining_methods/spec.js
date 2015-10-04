import { describe, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const numbers = [4, 8, 15, 16, 23, 42];
const submission = global.submission;

describe('Chaining methods', () => {
    beforeEach('reset the page', () => {
        d3.select('body').html('');
    });

    it('should export a function', () => {
        expect(submission).to.exist;
        expect(submission).to.be.a('function');
    });

    it('should change the body\'s background color', () => {
        submission(numbers);
        expect(d3.select('body').style('background-color')).to.equal('yellow');
    });

    it('should add a <h1> tag on the page', () => {
        expect(d3.select('h1').empty()).to.be.true;
        submission(numbers);
        expect(d3.select('h1').empty()).to.be.false;
    });

    it('should give the <h1> the right class', () => {
        submission(numbers);
        expect(d3.select('h1').attr('class')).to.equal('chart-title');
    });

    it('should set the <h1> text to "D3 bar chart"', () => {
        submission(numbers);
        expect(d3.select('h1').html()).to.equal('D3 bar chart');
    });
});
