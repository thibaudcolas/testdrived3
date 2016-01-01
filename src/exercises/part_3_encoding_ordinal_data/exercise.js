import '../../lib/svg-document';
import runner from '../../lib/runner';
import print from '../../lib/print';

import { frequencies } from '../../lib/data';

function runFunction(submission) {
    submission(frequencies);

    print.printHTML(global.document.body.outerHTML);
}

export default runner(runFunction);
