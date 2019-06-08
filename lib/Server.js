"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function Server(_ref) {
  var port = _ref.port,
      routes = _ref.routes;

  _classCallCheck(this, Server);

  this.port = port;
  this.routes = routes;
  var app = (0, _express["default"])();
  this.routes.forEach(function (_ref2) {
    var method = _ref2.method,
        path = _ref2.path,
        handler = _ref2.handler;
    app[method](path, handler);
  });
  app.listen(port, function () {
    console.log(_chalk["default"].green("server is listening on port ".concat(port)));
  });
} // static start() {
//   console.log('hi')
// }
;

var _default = Server;
exports["default"] = _default;