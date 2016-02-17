Test-drive D3 for much win! [![npm](https://img.shields.io/npm/v/testdrived3.svg?style=flat-square)](https://www.npmjs.com/package/testdrived3) [![Build Status](https://img.shields.io/travis/ThibWeb/testdrived3.svg?style=flat-square)](https://travis-ci.org/ThibWeb/testdrived3)
==========

__testdrived3__ is an intro to [D3](http://d3js.org/) via a set of self-guided workshops. It is based on the great [Let's Make a Bar Chart](http://bost.ocks.org/mike/bar/) tutorials from D3's creator, Mike Bostock.

![menu screenshot](menu-screenshot.png)

1. Install [Node.js](http://nodejs.org/)
2. Run `npm install -g testdrived3`
3. Run `testdrived3`
4. **.. profit!**

## Troubleshooting

This workshop relies on features only available in Node version 4 and above. To check your version, run `node --version` from the command line.

## Contributing

Install the project with:

```sh
git clone git@github.com:ThibWeb/testdrived3.git
cd testdrived3
nvm install
npm install
npm install -g eslint babel-eslint eslint-config-airbnb
./.githooks/deploy
```

To run the workshopper locally:

```sh
node src/index.js
```

To release a new version:

```sh
npm version minor -m "Release %s"
git push origin master
git push --tags
npm publish
```

> Dependencies: [![dependency Status](https://img.shields.io/david/ThibWeb/testdrived3.svg?style=flat-square)](https://david-dm.org/ThibWeb/testdrived3) [![devDependency Status](https://img.shields.io/david/dev/ThibWeb/testdrived3.svg?style=flat-square)](https://david-dm.org/ThibWeb/testdrived3)
