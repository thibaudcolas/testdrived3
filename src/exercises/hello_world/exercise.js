import runner from '../../lib/runner';

function runFunction(helloWorld) {
    console.log(`\nnumbers = [${[4, 8, 15]}]`);
    console.log(`helloWorld(numbers) = ${helloWorld([4, 8, 15])}`);

    console.log(`\nnumbers = [${[-100, 5, 0]}]`);
    console.log(`helloWorld(numbers) = ${helloWorld([-100, 5, 0])}`);

    console.log(`\nnumbers = [${[9, 9, 9]}]`);
    console.log(`helloWorld(numbers) = ${helloWorld([9, 9, 9])}`);
}

export default runner(runFunction);
