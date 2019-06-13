<p align="center">
  <a href="" rel="noopener">
 <img width=256px height=256px src="https://github.com/alexlee-dev/ressie/raw/master/ressie.png" alt="Ressie logo"></a>
</p>

<h3 align="center">Ressie</h3>

<div align="center">

[![NPM Version][npm-image]][npm-url] [![NPM Total Downloads][npm-downloads]][npm-url] [![npm bundle size (minified + gzip)][size-image]][npm-url] [![Coverage Status](https://coveralls.io/repos/github/alexlee-dev/ressie/badge.svg?branch=master)](https://coveralls.io/github/alexlee-dev/ressie?branch=master) [![Build Status](https://travis-ci.org/alexlee-dev/ressie.svg?branch=master)](https://travis-ci.org/alexlee-dev/ressie.svg?branch=master)

</div>

---

<p align="center"> A React Navbar/Sidebar combo component.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Installing](#installing)
- [Usage](#usage)
- [Built Using](#built_using)
- [Todo](#todo)
- [Author](#author)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name="about"></a>

Your server assistant.

## 📦 Installing <a name="installing"></a>

### NPM

```sh
npm install ressie
```

### Yarn

```sh
yarn add ressie
```

## 🎈 Usage <a name="usage"></a>

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

## ⛏️ Built Using <a name="built_using"></a>

- [Express](https://expressjs.com/) - Web Framework for Node.js

## ✏️ TODO <a name="todo">

## ✍️ Author <a name="author"></a>

- [Alex Lee](https://github.com/alexlee-dev) - Developer

## 🎉 Acknowledgements <a name="acknowledgement"></a>

- Icon made by [Eucalyp](https://www.flaticon.com/authors/eucalyp) from [www.flaticon.com](https://www.flaticon.com/) and is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

[npm-image]: https://img.shields.io/npm/v/ressie.svg
[npm-downloads]: https://img.shields.io/npm/dt/ressie.svg
[npm-url]: https://www.npmjs.com/package/ressie
[size-image]: https://img.shields.io/bundlephobia/minzip/ressie.svg
[ressie-icon]: https://github.com/alexlee-dev/ressie/raw/master/ressie.png
