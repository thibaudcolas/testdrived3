import jsdom from 'jsdom';

// Create a JSDOM document that we'll play with during the exercises.
global.document = jsdom.jsdom('<html><body><div class="html-chart"></div></body></html>');
global.window = global.document.defaultView;
