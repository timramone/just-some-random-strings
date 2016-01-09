var uniqueRandomArray = require('unique-random-array');
var randomStrings = require('./random-strings.json');
var getRandomItem = uniqueRandomArray(randomStrings);

var getRandomItems = function(number) {
  if (typeof number === 'undefined'){
    return getRandomItem();
  } else {
    var randomItems = [];
    for(var i = 0; i < number; ++i) {
      randomItems.push(getRandomItem());
    }

    return randomItems;
  }
}

module.exports = {
  all: randomStrings,
  random: getRandomItems
}
