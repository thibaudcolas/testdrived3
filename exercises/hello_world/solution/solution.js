'use strict';

var d3 = require('d3');

function helloWorld(numbers) {
    return d3.max(numbers);
}

module.exports = helloWorld;
