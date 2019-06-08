# Ressie

![Ressie Icon][ressie-icon]

[![NPM Version][npm-image]][npm-url] [![NPM Total Downloads][npm-downloads]][npm-url] [![npm bundle size (minified + gzip)][size-image]][npm-url]

> Your server assistant.

## Installation

### NPM

```sh
npm install ressie
```

### Yarn

```sh
yarn add ressie
```

## Usage

### Minimal Setup

```js
import Ressie from 'ressie'

new Ressie({
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res, next) => {
        res.send({ result: 'success' })
      }
    }
  ]
})

// Output: "Server is listening on port 5000 ..."
```

### Extended Setup

```js
import Ressie from 'ressie'

new Ressie({
  middleware: [
    {
      name: 'morgan',
      options: {
        format: 'dev'
      }
    }
  ],
  port: 5000,
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res, next) => {
        res.send({ result: 'success' })
      }
    }
  ]
  // * Other options TBD
})

// Output: "Server is listening on port 5000 ..."
```

## Attribution

### Icon

Bellboy icon made by [Eucalyp](https://www.flaticon.com/authors/eucalyp) from [www.flaticon.com](https://www.flaticon.com/) and is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

[npm-image]: https://img.shields.io/npm/v/ressie.svg
[npm-downloads]: https://img.shields.io/npm/dt/ressie.svg
[npm-url]: https://www.npmjs.com/package/ressie
[size-image]: https://img.shields.io/bundlephobia/minzip/ressie.svg
[ressie-icon]: https://github.com/alexlee-dev/ressie/raw/master/icon.png
