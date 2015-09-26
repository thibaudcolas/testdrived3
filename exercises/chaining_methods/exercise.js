import runner from '../../lib/runner';

function runFunction(submission) {
    submission();

    console.log(`\nHTML page: ${global.document.body.outerHTML}`);
}

export default runner(runFunction);
