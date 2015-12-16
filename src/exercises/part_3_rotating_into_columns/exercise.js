import '../../lib/svg-document';
import runner from '../../lib/runner';
import print from '../../lib/print';

function runFunction(submission) {
    submission();

    print.printHTML(global.document.body.outerHTML);
}

export default runner(runFunction);
