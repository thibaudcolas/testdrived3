import '../../lib/svg-document';
import runner from '../../lib/runner';
import print from '../../lib/print';

const numbers = [4, 8, 15, 16, 23, 42];

function runFunction(submission) {
    submission(numbers);

    print.printHTML(global.document.body.outerHTML);
}

export default runner(runFunction);
