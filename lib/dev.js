"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _index["default"])({
  port: 5000,
  routes: [{
    method: 'get',
    path: '/',
    handler: function handler(req, res, next) {
      res.send({
        result: 'success'
      });
    }
  }] // * Other options

});