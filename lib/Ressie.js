"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ressie = function Ressie(_ref) {
  var _this = this;

  var _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? [{
    name: 'morgan',
    options: {
      format: 'dev'
    }
  }] : _ref$middleware,
      _ref$port = _ref.port,
      port = _ref$port === void 0 ? 5000 : _ref$port,
      routes = _ref.routes;

  _classCallCheck(this, Ressie);

  this.port = port;
  this.routes = routes;
  this.middleware = middleware;
  this.middlewarePackages = [{
    name: 'morgan',
    "package": _morgan["default"]
  }];
  var app = (0, _express["default"])();
  app.use((0, _serveFavicon["default"])(_path["default"].join(__dirname, 'favicon.ico')));
  this.middleware.forEach(function (_ref2) {
    var name = _ref2.name,
        options = _ref2.options;

    var middleware = _this.middlewarePackages.find(function (middleware) {
      return middleware.name === name;
    })["package"];

    app.use(middleware(options.format));
  });
  this.routes.forEach(function (_ref3) {
    var method = _ref3.method,
        path = _ref3.path,
        handler = _ref3.handler;
    return app[method](path, handler);
  });
  app.listen(port, function () {
    console.clear();
    console.log(_chalk["default"].green("Server is listening on port ".concat(port, " ...")));
  });
};

var _default = Ressie;
exports["default"] = _default;