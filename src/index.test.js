var randomStrings = require('./index')
var expect = require('chai').expect;

describe('random-strings', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      var isArrayOfStrings =
        strings =>
          strings.every(item => typeof item === 'string');

      expect(randomStrings.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain 16', () => {
      expect(randomStrings.all).
        to.
        include('16');
    });

    it('should not contain 13', () => {
      expect(randomStrings.all).
        to.
        not.
        include('13');
    });
  })

  describe('random', () => {
    it('should return random item', () => {
      var randomItem = randomStrings.random();
      expect(randomStrings.all).to.include(randomItem);
    });

    it('should return array of random items if number is passed', () => {
      var randomItems = randomStrings.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(item => {
        expect(randomStrings.all).to.include(item);
      });
    });
  })
})
