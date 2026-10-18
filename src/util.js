const _ = require('lodash');

function evaluate(expression) {
  return eval(expression);
}

module.exports = { evaluate, merge: _.merge };
