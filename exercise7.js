// function reduce(arr, fn, initial) {
//     // SOLUTION GOES HERE
//     // var init = initial;
//     // init = fn(init);
//     // var end = Object.keys(arr).slice(1)
//     // return {...init,...fn(end)}
//     let res = arr.reduce(function(accumulator,currentValue) {
//         accumulator[currentValue] ? accumulator[currentValue]++ : accumulator[currentValue] = 1;
//         return accumulator;
//     }, {})
//     return res;
//   }
  
//   module.exports = reduce



  function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value // end condition
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
  }
  
  module.exports = reduce

