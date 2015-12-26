import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

import { numbers } from '../../lib/data';

const submission = global.submission;

describe('Selecting an element', () => {
    beforeEach('', () => {
        d3.select('h1').remove();
    });

    it('should export a function', () => {
        expect(submission).to.be.a('function');
    });

    it('should add a <h1> tag on the page', () => {
        submission(numbers);
        expect(d3.select('h1').empty()).to.equal(false);
    });

    it('should set the <h1> text to "D3 bar chart"', () => {
        submission(numbers);
        expect(d3.select('h1').html()).to.equal('D3 bar chart');
    });
});
