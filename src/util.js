const _ = require('lodash');

function evaluate(expression) {
  return JSON.parse(expression);
}

module.exports = { evaluate, merge: _.merge };
