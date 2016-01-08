var uniqueRandomArray = require('unique-random-array');
var randomStrings = require('./random-strings.json');

module.exports = {
  all: randomStrings,
  random: uniqueRandomArray(randomStrings)
}
