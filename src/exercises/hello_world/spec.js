import { describe, it } from 'mocha';
import { expect } from 'chai';

const helloWorld = global.submission;

describe('Hello, World!', () => {
    it('should export a function', () => {
        expect(helloWorld).to.be.a('function');
    });

    it('should return a number', () => {
        expect(helloWorld([1, 2])).to.be.a('number');
    });

    it('should return the maximum value', () => {
        expect(helloWorld([4, 8, 15, 16, 23, 42])).to.equal(42);
        expect(helloWorld([-9, 20, 9])).to.equal(20);
        expect(helloWorld([2, 2])).to.equal(2);
    });
});
