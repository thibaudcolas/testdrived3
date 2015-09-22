import path from 'path';
import workshopper from 'workshopper';

workshopper({
    name: 'testdrived3',
    appDir: __dirname,
    languages: ['en'],
    helpFile: path.join(__dirname, './i18n/help/{lang}.txt'),
    menuItems: [],
});
