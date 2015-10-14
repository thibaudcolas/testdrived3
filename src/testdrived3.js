#!/usr/bin/env node

import path from 'path';
import workshopper from 'workshopper';
import updateNotifier from 'update-notifier';
import Server from './lib/Server';
import pkg from '../package.json';

updateNotifier({pkg: pkg}).notify();

workshopper({
    name: 'testdrived3',
    appDir: __dirname,
    languages: ['en'],
    helpFile: path.join(__dirname, './i18n/help/{lang}.txt'),
    menuItems: [],
    commands: [
        {
            name: 'server',
            menu: false,
            short: 's',
            handler() {
                const submissionPath = path.resolve(process.cwd(), process.argv[3]);
                const server = new Server(process.env.PORT || 3333, submissionPath);

                server.watch();
            },
        },
    ],
});
