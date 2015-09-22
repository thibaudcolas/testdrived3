// node index.js verify tests/missing-deps.js
'use strict';

var d3 = require('d3');
var lodash = require('lodash');

function helloWorld(numbers) {
    console.log(d3.max(numbers));
};

module.exports = helloWorld;
