'use strict';

var d3 = require('d3');

module.exports = function() {
    var body = d3.select('body');
    var title = body.append('h1');

    title.html('D3 bar chart');
};
