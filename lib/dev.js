"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// * Simple
new _index["default"]({
  routes: [{
    method: 'get',
    path: '/',
    handler: function handler(req, res, next) {
      res.send({
        result: 'success'
      });
    }
  }]
}); // * Options
// new Ressie({
//   middleware: [
//     {
//       name: 'morgan',
//       options: {
//         format: 'dev'
//       }
//     }
//   ],
//   port: 5000,
//   routes: [
//     {
//       method: 'get',
//       path: '/',
//       handler: (req, res, next) => {
//         res.send({ result: 'success' })
//       }
//     }
//   ]
//   // * Other options
// })