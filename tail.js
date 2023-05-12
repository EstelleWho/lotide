const assertEqual = require('./assertEqual').default;

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
