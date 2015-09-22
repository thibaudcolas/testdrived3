import runner from '../../lib/runner';

function runFunction(submission) {
    submission();

    console.log(`\npage HTML: ${global.document.body.outerHTML}`);
}

export default runner(runFunction);
