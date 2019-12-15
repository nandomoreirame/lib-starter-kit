'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint no-restricted-globals:0  */

const double = (num = 0) => {
  try {
    if (Object.prototype.toString.call(num) !== '[object Number]') {
      throw new TypeError('not a number');
    }

    return num * 2;
  } catch (err) {
    throw `${num} is ${err}`; // eslint-disable-line
  }
};

const StarterKit = {
  double,
};

exports.default = StarterKit;
exports.double = double;
