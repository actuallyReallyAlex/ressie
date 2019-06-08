# Ressie

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

```js
import Ressie from 'ressie'

new Ressie({
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
  // * Other options
})
```

[npm-image]: https://img.shields.io/npm/v/ressie.svg
[npm-downloads]: https://img.shields.io/npm/dt/ressie.svg
[npm-url]: https://www.npmjs.com/package/ressie
[size-image]: https://img.shields.io/bundlephobia/minzip/ressie.svg
