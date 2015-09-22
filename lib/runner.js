import path from 'path';
import Mocha from 'mocha';
import jsdom from 'jsdom';
import exerciser from 'workshopper-exercise';
import filecheck from 'workshopper-exercise/filecheck';
import execute from 'workshopper-exercise/execute';

export default function() {
    const exercise = execute(filecheck(exerciser()));

    // Processor to check that the submission is parsed properly.
    exercise.addSetup(function(mode, callback) {
        const i18n = exercise.__.bind(exercise);
        const submissionPath = path.resolve(process.cwd(), this.args[0]);
        let submission;

        try {
            submission = require(submissionPath);
        } catch (e) {
            const message = (e.code === 'MODULE_NOT_FOUND' ? i18n('fail.module_not_found') : i18n('fail.module_error'));

            // We still throw the error in order to show the stack trace.
            this.emit('fail', message)
            throw e;

            return callback(null, false)
        }

        if (typeof submission !== 'function') {
            this.emit('fail', i18n('fail.must_export_function'))
            return callback(null, false)
        }

        // Expose the submission as a global variable.
        global.submission = submission;

        callback(null, true);
    });

    // Mocha setup to run the exercise's tests.
    exercise.addSetup(function(mode, callback) {
        const mocha = new Mocha();
        mocha.addFile(path.join(this.dir, 'spec.js'));

        // Create a JSDOM document.
        global.document  = jsdom.jsdom('<html><body></body></html>');
        global.window    = document.parentWindow;
        global.navigator = window.navigator;

        mocha.run((failures) => {
            this.failures = failures;
            callback(null, true);
        });
    });

    // Mocha teardown to check that all tests passed.
    exercise.addVerifyProcessor(function (callback) {
        const i18n = exercise.__.bind(exercise);
        const passed = this.failures === 0;

        if (passed) {
            this.emit('pass', i18n('test.pass'));
        } else {
            this.emit('fail', i18n('test.fail'));
        }

        callback(null, passed);
    });

    return exercise;
};
