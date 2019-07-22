const {fromRoman, toRoman} = require('../roman')
const tests = require('./tests.json')

tests.forEach( (roman, i) => {
  i = i + 1;
  module.exports[`test succcess toRoman(${i})`] = (test) => {
    test.equal(toRoman(i), roman);
    test.done();
  };
  module.exports[`test succcess fromRoman(${roman})`] = (test) => {
    test.equal(fromRoman(roman), i);
    test.done();
  };
  module.exports[`test sanity (${i}, ${roman})`] = (test) => {
    test.equal(fromRoman(toRoman(i)), i);
    test.equal(toRoman(fromRoman(roman)), roman);
    test.done();
  };
}); 
