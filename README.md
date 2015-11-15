Test-drive D3 for much win!
==========

> An intro to [D3](http://d3js.org/) via a set of self-guided workshops.

__testdrived3__ will guide you through the creation of a <strike>3D pie chart</strike> bar chart. It is based on the [Let's Make a Bar Chart](http://bost.ocks.org/mike/bar/), [Part 2](http://bost.ocks.org/mike/bar/2/) and [Part 3](http://bost.ocks.org/mike/bar/3/) tutorials from D3's creator, Mike Bostock.

[![npm](https://img.shields.io/npm/v/testdrived3.svg?style=flat-square)](https://www.npmjs.com/package/testdrived3) [![Build Status](https://img.shields.io/travis/ThibWeb/testdrived3.svg?style=flat-square)](https://travis-ci.org/ThibWeb/testdrived3)

> TODO Screenshot

1. Install [Node.js](http://nodejs.org/)
2. Run `npm install -g testdrived3`
3. Run `testdrived3`
4. **.. profit!**

## Contributing [![dependency Status](https://img.shields.io/david/ThibWeb/testdrived3.svg?style=flat-square)](https://david-dm.org/ThibWeb/testdrived3) [![devDependency Status](https://img.shields.io/david/dev/ThibWeb/testdrived3.svg?style=flat-square)](https://david-dm.org/ThibWeb/testdrived3)

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
