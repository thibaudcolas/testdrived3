import { describe, it } from 'mocha';
import { expect } from 'chai';
import d3 from 'd3';

const numbers = [4, 8, 15, 16, 23, 42];
const submission = global.submission;

describe('Part 2: Coding a chart, automatically', () => {
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

    it('each bar should be positioned with a translate transform, according to its order', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt, i) => {
            const transform = elt.getAttribute('transform');
            const positionY = parseInt(transform.split('translate(0,')[1], 10);

            expect(transform).to.be.a('string');
            expect(transform.indexOf('translate(0,')).to.equal(0);
            expect(positionY).to.equal(i * 20);
        });
    });

    it('each <text> should have the right value', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt) => {
            const text = d3.select(elt).select('text')[0][0];
            const value = parseInt(text.innerHTML, 10);

            expect(value).to.be.a('number');
            expect(value).to.be.above(0);
            expect(numbers.indexOf(value)).not.to.equal(-1);
        });
    });

    it('each <text> should be at the right position', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt) => {
            const text = d3.select(elt).select('text')[0][0];
            const value = parseInt(text.innerHTML, 10);
            const x = parseFloat(text.getAttribute('x'));
            const y = parseFloat(text.getAttribute('y'));
            const dy = text.getAttribute('dy');

            expect(x).to.be.closeTo(value * 10 - 3, 0.05);
            expect(y).to.equal(10);
            expect(dy).to.equal('.35em');
        });
    });

    it('each <rect> should be of the right dimensions', () => {
        submission(numbers);
        const bars = d3.selectAll('.chart > g')[0];

        bars.forEach((elt) => {
            const rect = d3.select(elt).select('rect')[0][0];
            const text = d3.select(elt).select('text')[0][0];
            const value = parseInt(text.innerHTML, 10);
            const width = parseInt(rect.getAttribute('width'), 10);
            const height = parseInt(rect.getAttribute('height'), 10);

            expect(width).to.be.equal(value * 10);
            expect(height).to.equal(19);
        });
    });
});
