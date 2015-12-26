import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

import { numbers } from '../../lib/data';

const submission = global.submission;

describe('Chaining methods', () => {
    beforeEach('', () => {
        d3.select('h1').remove();
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should change the body\'s background color', () => {
        submission(numbers);
        expect(d3.select('body').style('background-color')).to.equal('yellow');
    });

    it('should add a <h1> tag on the page', () => {
        submission(numbers);
        expect(d3.select('h1').empty()).to.equal(false);
    });

    it('should give the <h1> the right class', () => {
        submission(numbers);
        expect(d3.select('h1').attr('class')).to.equal('chart-title');
    });

    it('should set the <h1> text to "D3 bar chart"', () => {
        submission(numbers);
        expect(d3.select('h1').html()).to.contain('D3');
        expect(d3.select('h1').html()).to.contain('bar');
        expect(d3.select('h1').html()).to.contain('chart');
    });
});
