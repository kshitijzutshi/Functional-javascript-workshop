// Target is : [object Object] -> array of objects
// Method is : test

function Spy(target, method) {
    // SOLUTION GOES HERE
    // console.log(`Target is : ${target}`);
    // console.log(`Method is : ${method}`);

    // Use bind() to pre append target object and method
    // Use accumulator to count number of calls using fn.call()
    // const result = target.reduce(function(acc, item, index, target) {
    //     acc.push(method.call(item, index, target))
    //     return acc
    //   }, [])
    //   return result.length;

    /*

    To override a method existing -- use the apply()

    


    */

    let spy = { count : 0};

    let oldFunction = target[method];

    target[method] = function(){
        spy.count++;
        return oldFunction.apply(target,arguments);
    }
    return spy;

  }
  
  module.exports = Spy



  /*

function Spy(target, method) {
      var originalFunction = target[method]
    
      // use an object so we can pass by reference, not value
      // i.e. we can return result, but update count from this scope
      var result = {
        count: 0
      }
    
      // replace method with spy method
      target[method] = function() {
        result.count++ // track function was called
        return originalFunction.apply(this, arguments) // invoke original function
      }
    
      return result
    }
    
    module.exports = Spy



  */
