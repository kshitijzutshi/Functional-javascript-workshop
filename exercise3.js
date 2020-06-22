/*
Task:
Convert the following code from a for-loop to Array#map:

Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }
    
    module.exports = doubleAll

*/

function doubleAll(numbers) {
    // SOLUTION GOES HERE
    const ret_val = numbers.map(num => num * 2);
    return ret_val;
  }
  
  module.exports = doubleAll