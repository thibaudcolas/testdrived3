import '../../lib/html-document';
import runner from '../../lib/runner';
import print from '../../lib/print';

import { numbers } from '../../lib/data';

function runFunction(submission) {
    submission(numbers);

    print.printHTML(global.document.body.outerHTML);
}

export default runner(runFunction);
