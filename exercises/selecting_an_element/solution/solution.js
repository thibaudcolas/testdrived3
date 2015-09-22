var d3 = require('d3');

function helloWorld() {
    var body = d3.select('body');
    var div = body.append('div');

    div.html('Hello, world!');
};

module.exports = helloWorld;
