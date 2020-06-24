// Implement Map with Reduce

module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    // var output = map(arr, function retfunc(arrelem) {

    // })

    let output = arr.reduce(function(acc,cv) {
        acc = arr.map(function(cv){
            return fn(cv);
        })
        return acc;
    },[])

    return output;
  }
  

  /*

  module.exports = function arrayMap(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
      }, [])
    }
    

  */