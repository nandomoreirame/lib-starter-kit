(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = global || self, factory(global.StarterKit = {}));
}(this, (function (exports) { 'use strict';

/* eslint no-restricted-globals:0  */
var _double = function _double() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  try {
    if (Object.prototype.toString.call(value) !== '[object Number]') {
      throw new TypeError('not a number');
    }

    return value * 2;
  } catch (err) {
    throw "".concat(value, " is ").concat(err); // eslint-disable-line
  }
};
var StarterKit = {
  "double": _double
};

exports.default = StarterKit;
exports.double = _double;

Object.defineProperty(exports, '__esModule', { value: true });

})));
