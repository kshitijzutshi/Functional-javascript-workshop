/*
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
*/




function countWords(inputWords) {
    // SOLUTION GOES HERE
    let res = inputWords.reduce(function(accumulator,currentValue) {
        accumulator[currentValue] ? accumulator[currentValue]++ : accumulator[currentValue] = 1;
        return accumulator;
    }, {})
    return res;
  }
  
  module.exports = countWords

/*

Alternate solution

  function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
      return countMap
    }, {}) // second argument to reduce initialises countMap to {}
  }
  
  module.exports = countWords
  */