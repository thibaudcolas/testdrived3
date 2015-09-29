import runner from '../../lib/runner';

const numbers = [4, 8, 15, 16, 23, 42];

function runFunction(submission) {
    submission(numbers);

    console.log(`\npage HTML: ${global.document.body.outerHTML}`);
}

export default runner(runFunction);
