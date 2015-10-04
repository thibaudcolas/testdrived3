import cardinal from 'cardinal';
import html from 'html';

export default {
    getPrettyCode(code) {
        return cardinal.highlight(code);
    },

    printHTML(code) {
        const prettyHTML = html.prettyPrint(code, {indent_size: 4});
        const prettyCode = this.getPrettyCode(prettyHTML);

        process.stdout.write('\n');
        process.stdout.write(prettyCode);
    },
};
