import path from 'path';
import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import browserSync from 'browser-sync';

const bs = browserSync.create();

export default class Server {
    constructor(port, submissionPath) {
        this.port = port;
        this.submissionPath = submissionPath;

        this.basepath = path.join(__dirname, '..', 'static');
        this.copyPath = path.join(__dirname, '..', 'static', 'submission.js');
        this.entryPath = path.join(__dirname, '..', 'static', 'main.js');
        this.outputPath = path.join(__dirname, '..', 'static', 'bundle.js');
    }

    copySubmission(file, cb) {
        fs.readFile(file, {encoding: 'utf-8'}, (error, content) => {
            fs.writeFile(this.copyPath, content, cb);
        });
    };

    watch() {
        bs.watch(this.submissionPath, () => {
            this.copySubmission(this.submissionPath, this.bundleFiles.bind(this));
        });
    }

    bundleFiles() {
        const bundler = browserify([this.entryPath], {
            cache: {},
            transform: [babelify],
            packageCache: {},
            debug: true,
            fullPaths: true,
        });

        process.stdout.write('Loading your solution... ');

        bundler.bundle((error, js) => {
            if (error) {
                console.log(error);
                bs.notify(error.message, 10000);
            }

            fs.writeFile(this.outputPath, js, (error) => {
                if (error) {
                    console.log(error);
                }

                console.log('done!');

                if (!bs.active) {
                    this.start();
                } else {
                    bs.reload();
                }

            });

        });
    }

    start() {

        bs.init({
            server: this.basepath,
            port: this.port,
            notify: false,
            ui: false,
            logLevel: 'silent',
        });

        console.log(`Point your browser to http://localhost:${this.port}/`);

        bs.watch()
    }
}
