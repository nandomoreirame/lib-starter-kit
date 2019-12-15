/* eslint no-restricted-globals:0  */

const double = (value = 0) => {
  try {
    if (Object.prototype.toString.call(value) !== '[object Number]') {
      throw new TypeError('not a number');
    }

    return value * 2;
  } catch (err) {
    throw `${value} is ${err}`; // eslint-disable-line
  }
};

const StarterKit = {
  double,
};

export default StarterKit;
export { double };
