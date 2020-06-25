function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return

    // To modify repeat so that it returns the 'next step' if there is one!
    return function(){
        operation()
        return repeat(operation, --num)
    }
    
  }
  
  function trampoline(fn) {
    // You probably want to implement a trampoline!
    // Add a condition that this trampoline function executes sync. ly and gets steps till there are no more!!
    while(fn && typeof fn === 'function'){
        fn = fn();
    }
    return fn;
  }
  
  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(function(){
        return repeat(operation, num)
    })
   
  }

