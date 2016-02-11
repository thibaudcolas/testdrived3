import html from 'html';

export default {
    printHTML(code) {
        const prettyHTML = html.prettyPrint(code, {indent_size: 4});

        process.stdout.write('\n');
        process.stdout.write(prettyHTML);
    },
};
